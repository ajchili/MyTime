import React, {Component} from 'react';
import Table from './TimeTrackerTable';

const firebase = window.firebase;
const refreshInterval = 10;
let interval;

export default class extends Component {
  state = {
    timers: [],
    categories: []
  };

  componentDidMount() {
    this.refreshTimers();
    this.refreshCategories();
  }

  refreshTimers = () => {
    clearInterval(interval);

    firebase.firestore()
      .collection('users')
      .doc(this.props.user.uid)
      .collection('timers')
      .get()
      .then(querySnapshot => {
        let timers = [];
        let requiresUpdate = false;
        let lastCheck = refreshInterval;

        querySnapshot.forEach(doc => {
          if (doc.data().timeStarted) {
            requiresUpdate = true;
          }

          timers.push({
            id: doc.id,
            category: doc.data().category,
            time: doc.data().time,
            timeStarted: doc.data().timeStarted,
            title: doc.data().title
          });
        });

        this.setState({
          timers
        });

        if (requiresUpdate) {
          interval = setInterval(() => {
            if (lastCheck) {
              lastCheck--;
              this.setState({
                timers
              });
            } else {
              this.refreshTimers();
            }
          }, 500);
        }
      });
  };

  refreshCategories = () => {
    firebase.firestore()
      .collection('users')
      .doc(this.props.user.uid)
      .collection('categories')
      .get()
      .then(querySnapshot => {
        let categories = [];

        querySnapshot.forEach(doc => {
          categories.push({
            id: doc.id,
            name: doc.data().name
          });
        });

        this.setState({
          categories
        });
      });
  };

  render() {
    return (
      <div>
        <Table
          timers={this.state.timers}
          categories={this.state.categories}
          uid={this.props.user.uid}
          actions={{
            refreshCategories: this.refreshCategories,
            refreshTimers: this.refreshTimers
          }}
        />
      </div>
    );
  }
}
