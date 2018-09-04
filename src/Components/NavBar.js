import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const firebase = window.firebase;

export default class extends Component {
  logout() {
    firebase.auth().signOut().catch(err => {
      console.error(err);
    })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">
          {this.props.authenticated
            ?
            <img
              className="d-inline-block align-top"
              width={30}
              height={30}
              src={this.props.photoURL}
              alt=""
            />
            : <span>MyTime</span>
          }
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {this.props.authenticated &&
              <li className="nav-item">
                <Link className="nav-link" to={"/profile"}>Profile</Link>
              </li>
            }
            {this.props.authenticated &&
            <li className="nav-item">
              <Link className="nav-link" to={"/track"}>Track Time</Link>
            </li>
            }
            {this.props.authenticated &&
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={this.logout}
              >Logout</a>
            </li>
            }
          </ul>
        </div>
      </nav>
    );
  }
}
