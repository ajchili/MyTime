import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faSlidersH,
  faPlay,
  faPause,
  faEdit,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import {PrivateRoute} from "./Components/Routes";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Profile from './Components/Profile';
import TimeTracker from './Components/TimeTracker';

const firebase = window.firebase;

library.add(faPlus);
library.add(faSlidersH);
library.add(faPlay);
library.add(faPause);
library.add(faEdit);
library.add(faTrash);

export default class App extends React.Component {
  state = {
    authenticated: false,
    user: null
  };

  componentDidMount() {
    const settings = {timestampsInSnapshots: true};
    firebase.firestore().settings(settings);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          user
        });
      } else {
        this.setState({
          authenticated: false,
          user: null
        });
      }
    });
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar
            authenticated={this.state.authenticated}
            photoURL={this.state.user ? this.state.user.photoURL : null}
          />
          <Switch>
            <PrivateRoute
              exact
              path="/profile"
              authenticated={this.state.authenticated}
              component={props => <Profile authenticated={this.state.authenticated} user={this.state.user} />}
            />
            <PrivateRoute
              exact
              path="/track"
              authenticated={this.state.authenticated}
              component={props => <TimeTracker authenticated={this.state.authenticated} user={this.state.user} />}
            />
            <Route render={props => <Home authenticated={this.state.authenticated} user={this.state.user} />} />
          </Switch>
        </div>
      </Router>
    )
  }
}
