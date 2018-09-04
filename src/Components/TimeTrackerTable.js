import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class extends Component {
  state = {
    things: [
      {
        title: "Testing",
        category: "ABC",
        time: 0
      }
    ],
    pageSize: 10,
    currentPage: 0
  };

  render() {
    return (
      <div className="table-responsive">
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
                <select
                  className="custom-select"
                  value="Category"
                >
                  <option>Category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </th>
              <th scope="col">Time</th>
              <th scope="col">
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
                <button
                  style={{
                    marginRight: '0.5em'
                  }}
                  className="btn btn-secondary"
                >
                  <FontAwesomeIcon icon={['fas', 'sliders-h']} />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td></td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td></td>
            </tr>
            <tr>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
