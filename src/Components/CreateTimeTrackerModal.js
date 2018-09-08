import React, {Component} from "react";
import CategorySelector from './CategorySelector';

export default class extends Component {
  state = {
    title: '',
    category: null
  };

  handleTitleChanged = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleCategoryChanged = e => {
    this.setState({
      category: e.target.value
    });
  };

  render() {
    return (
      <div className="modal fade" id="createTimerModal" tabIndex="-1" role="dialog">
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
                    className="form-control"
                    placeholder="Title"
                    onChange={this.handleTitleChanged}
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <CategorySelector
                    categories={this.props.categories}
                    onChange={this.handleCategoryChanged}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => this.props.actions.addTimer(this.state.title, this.state.category)}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
