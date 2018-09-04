import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const db = window.firebase.firestore();
const $ = window.$;

class CategorySelector extends Component {
  render() {
    return (
      <div className="input-group">
        <select
          id={this.props.selectorId}
          className="custom-select"
        >
          <option value="Category">Category</option>
          {this.props.categories}
        </select>
        <div className="input-group-append">
          <button
            className="btn btn-secondary"
            data-dismiss="modal"
            data-toggle="modal"
            data-target="#createCategoryModal"
          >
            <FontAwesomeIcon
              icon={['fa', 'plus']}
            />
          </button>
        </div>
      </div>
    )
  }
}

export default class extends Component {
  state = {
    error: null,
    activeTimers: [],
    activeCategories: [],
    pageSize: 10,
    currentPage: 0
  };

  addCategory = () => {
    let name = document.getElementById('createCategoryName');
    if (name.value && name.value.length) {
      db
        .collection('users')
        .doc(this.props.uid)
        .collection('categories')
        .add({
          name: name.value
        })
        .then(doc => {
          $('#createCategoryModal').modal('hide');
          let categories = this.state.activeCategories;
          categories.push({
            id: doc.id,
            name: name.value
          });
          this.setState({
            activeCategories: categories
          });
        })
        .catch(err => console.error(err));
    }
  };

  addTimer = () => {
    let title = document.getElementById('createTimerTitle');
    if (title.value && title.value.length) {
      let category = document.getElementById('createTimerCategory');
      let categoryValue = category.value !== 'Category' ? category.value : null;
      db
        .collection('users')
        .doc(this.props.uid)
        .collection('timers')
        .add({
          title: title.value,
          category: categoryValue,
          time: 0
        })
        .then(doc => {
          $('#createTimerModal').modal('hide');
          let timers = this.state.activeTimers;
          timers.push({
            id: doc.id,
            title: title.value,
            category: categoryValue,
          });
          title.value = "";
          category.value = "Category";
          this.setState({
            activeTimers: timers
          });
        })
        .catch(err => console.error(err));
    } else {

    }
  };

  deleteTimer = (id, title) => {
    db
      .collection('users')
      .doc(this.props.uid)
      .collection('timers')
      .doc(id)
      .delete()
      .then(() => {
        let timers = this.state.activeTimers.filter(timer => timer.id !== id);
        this.setState({
          activeTimers: timers
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    const timers = this.state.activeTimers
      .concat(this.props.timers)
      .map(timer =>
        <tr key={timer.id}>
          <td>{timer.title}</td>
          <td></td>
          <td></td>
          <td>
            <div
              style={{
                float: 'right'
              }}
            >
              <button
                style={{
                  marginRight: '0.5em'
                }}
                className="btn btn-primary btn-sm"
              >
                <FontAwesomeIcon
                  icon={['fa', 'play']}
                />
              </button>
              <button
                style={{
                  marginRight: '0.5em'
                }}
                className="btn btn-secondary btn-sm"
              >
                <FontAwesomeIcon
                  icon={['fa', 'edit']}
                />
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => this.deleteTimer(timer.id, timer.title)}
              >
                <FontAwesomeIcon
                  icon={['fa', 'trash']}
                />
              </button>
            </div>
          </td>
        </tr>
      );
    const categories = this.state.activeCategories
      .concat(this.props.categories)
      .map(category => <option key={category.id} value={category.id}>{category.name}</option>);

    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Title"
                />
              </th>
              <th scope="col">
                <CategorySelector categories={categories}/>
              </th>
              <th scope="col">Time</th>
              <th scope="col">
                <div
                  style={{
                    float: 'right'
                  }}
                >
                  <button
                    style={{
                      marginRight: '0.5em'
                    }}
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#createTimerModal"
                  >
                    <FontAwesomeIcon
                      icon={['fa', 'plus']}
                    />
                  </button>
                  <button className="btn btn-secondary">
                    <FontAwesomeIcon icon={['fas', 'sliders-h']} />
                  </button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
          {timers}
          </tbody>
        </table>

        <div className="modal fade" id="createCategoryModal" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Category</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      id="createCategoryName"
                      className="form-control"
                      placeholder="Title"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.addCategory}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="createTimerModal" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Timer</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      id="createTimerTitle"
                      className="form-control"
                      placeholder="Title"
                    />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <CategorySelector
                      selectorId="createTimerCategory"
                      categories={categories}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.addTimer}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
