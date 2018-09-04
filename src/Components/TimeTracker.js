import React, {Component} from 'react';
import Table from './TimeTrackerTable';

const firebase = window.firebase;

export default class extends Component {
  state = {
    timers: [],
    categories: []
  };

  componentDidMount() {
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
  }

  render() {
    return (
      <div>
        <Table
          timers={this.state.timers}
          categories={this.state.categories}
          uid={this.props.user.uid}
        />
      </div>
    );
  }
}
