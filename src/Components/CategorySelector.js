import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class extends Component {
  render() {
    return (
      <div className="input-group">
        <select
          className="custom-select"
          onChange={this.props.onChange}
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