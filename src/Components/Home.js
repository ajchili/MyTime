import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Lander from './Lander';

class App extends Component {
  constructor(props) {
    super(props);
  }

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
