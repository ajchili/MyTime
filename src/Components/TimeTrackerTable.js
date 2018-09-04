import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const db = window.firebase.firestore();

export default class extends Component {
  state = {
    error: null,
    activeTimers: [],
    activeCategories: [],
    pageSize: 10,
    currentPage: 0
  };

  addCategory = () => {
    let name = prompt('Please provide the name of the new category.');
    if (name && name.length) {
      db
        .collection('users')
        .doc(this.props.uid)
        .collection('categories')
        .add({
          name
        })
        .then(doc => {
          let categories = this.state.activeCategories;
          categories.push({
            id: doc.id,
            name
          });
          this.setState({
            activeCategories: categories
          });
        })
        .catch(err => console.error(err));
    }
  };

  addTimer = () => {
    let title = prompt('Please provide the title of the new timer.');
    if (title && title.length) {
      db
        .collection('users')
        .doc(this.props.uid)
        .collection('timers')
        .add({
          title
        })
        .then(doc => {
          let timers = this.state.activeTimers;
          timers.push({
            id: doc.id,
            title,
            time: 0
          });
          this.setState({
            activeTimers: timers
          });
        })
        .catch(err => console.error(err));
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
                <div className="input-group">
                  <select
                    className="custom-select"
                    value="Category"
                  >
                    <option value="Category">Category</option>
                    {categories}
                  </select>
                  <div className="input-group-append">
                    <button
                      className="btn btn-secondary"
                      onClick={this.addCategory}
                    >
                      <FontAwesomeIcon
                        icon={['fa', 'plus']}
                      />
                    </button>
                  </div>
                </div>
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
                    onClick={this.addTimer}
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
      </div>
    );
  }
}
