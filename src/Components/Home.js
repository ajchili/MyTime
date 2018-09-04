import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Lander from './Lander';

class App extends Component {
  render() {
    return (
      <div>
        {!this.props.authenticated ?
          <Lander/>
          :
          <Redirect to='/profile' />
        }
      </div>
    );
  }
}

export default App;
