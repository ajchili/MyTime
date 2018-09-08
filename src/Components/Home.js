import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Lander from './Lander';

export default class extends Component {
  render() {
    return (
      <div>
        {!this.props.authenticated
          ? <Lander/>
          : <Redirect to='/track' />
        }
      </div>
    );
  }
}
