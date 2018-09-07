import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class extends Component {
  render() {
    let time = Math.floor(((this.props.timer.timeStarted ? new Date().getTime() - this.props.timer.timeStarted : 0) + this.props.timer.time) / 1000);
    let hours = Math.floor(time / (60 * 60));
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return (
      <tr key={this.props.timer.id}>
        <td>{this.props.timer.title}</td>
        <td></td>
        <td>
          {hours > 0 &&
            <span><strong>{hours}</strong> hours, </span>
          }
          {minutes > 0 &&
            <span><strong>{minutes}</strong> minutes, </span>
          }
          {seconds > 0 &&
            <span><strong>{seconds}</strong> seconds</span>
          }
        </td>
        <td>
          <div
            style={{
              float: 'right'
            }}
          >
            {this.props.timer.timeStarted
              ?
              <button
                style={{
                  marginRight: '0.5em'
                }}
                className="btn btn-primary btn-sm"
                onClick={() => this.props.actions.stopTimer()}
              >
                <FontAwesomeIcon
                  icon={['fa', 'pause']}
                />
              </button>
              :
              <button
                style={{
                  marginRight: '0.5em'
                }}
                className="btn btn-success btn-sm"
                onClick={() => this.props.actions.startTimer()}
              >
                <FontAwesomeIcon
                  icon={['fa', 'play']}
                />
              </button>
            }
            <button
              style={{
                marginRight: '0.5em'
              }}
              className="btn btn-secondary btn-sm"
            >
              <FontAwesomeIcon
                icon={['fa', 'edit']}
              />
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => this.props.actions.deleteTimer()}
            >
              <FontAwesomeIcon
                icon={['fa', 'trash']}
              />
            </button>
          </div>
        </td>
      </tr>
    )
  }
}