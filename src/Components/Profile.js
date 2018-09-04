import React, {Component} from 'react';

export default class extends Component {
  render() {
    let firstName = this.props.user.displayName.split(' ')[0];
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Welcome {firstName}!</h1>
          <p className="lead">Below are some settings and stats about your profile, feel free to check them out or just get some time logged.</p>
        </div>
      </div>
    );
  }
}