import React, { Component } from 'react';
import { getAggregatedDataSet } from '../data/aggregator';

class Messages extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }

  /**
   * Get data and save in state
   */
  async componentDidMount() {
    const aggregatedDataSet = getAggregatedDataSet(this.props);
    this.setState({ messages: aggregatedDataSet })
  }

  /**
   * Use intl.datetimeformat.  Good for localised date/times
   * @param {*} date 
   */
  formatDate(date) {
    const temp = new Date(date).getTime();
    const options = {
      weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      timeZone: 'UTC',

    }
    return new Intl.DateTimeFormat('en-GB', options).format(temp);
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        {this.state.messages.map((message, index) => (
          <div>

            <div key={index} className="messageRow">
              <div className="messageCell">{this.formatDate(message.timestamp)}</div>
              <div className="messageCell" style={{ minHeight: '100px', minWidth: '100px' }}>
                {message.avatar &&
                  <img alt="none" src={message.avatar}></img>
                }
              </div>
              <div className="messageCell">{message.message}</div>
              <div className="messageCell">{message.fullName}</div>

            </div>
            <hr />
          </div>

        ))}
      </div>
    );

  };
}

export default Messages;