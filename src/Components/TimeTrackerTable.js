import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const db = window.firebase.firestore();

export default class extends Component {
  state = {
    error: null,
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

  };

  render() {
    const timers = this.props.timers;
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
