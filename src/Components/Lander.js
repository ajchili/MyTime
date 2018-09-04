import React, {Component} from 'react';

const firebase = window.firebase;

export default class extends Component {
  login() {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).catch(err => {
      console.error(err);
    });
  }

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Welcome!</h1>
        <p className="lead">MyTime is a simple to use and mobile friendly way to keep track of time spent doing things.</p>
        <hr className="my-4"/>
        <button
          className="btn btn-primary"
          onClick={this.login}
        >
          Login with Google
        </button>
      </div>
    );
  }
}
