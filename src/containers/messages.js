import React, { Component } from 'react';
import { getAggregatedDataSet } from '../data/aggregator';

class Messages extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      showEmailIndex: -1, // -1 means nowhere
    };
    this.onMouseEvent = this.onMouseEvent.bind(this);
  }

  /**
   * Get data and save in state
   */
  componentDidMount() {
    const aggregatedDataSet = getAggregatedDataSet(this.props);
    this.setState({ messages: aggregatedDataSet })
  }

  /**
   * Fired on mouse in of message
   * @param {*} event
   */
  onMouseEvent(index) {
    this.setState({ showEmailIndex: index });
  }

  /**
   * Use intl.datetimeformat.  Good for localised date/times
   * @param {*} date 
   */
  formatDate(date) {
    const temp = new Date(date).getTime();
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZone: 'UTC',
    };
    return new Intl.DateTimeFormat('en-GB', options).format(temp);
  }

  render() {
    return (
      <div>
        {this.state.messages.map((message, index) => (

          <div key={index} className="messageRow">
            <div className="messageCell messageDate">{this.formatDate(message.timestamp)}</div>
            <div className="messageAvatar">{message.avatar && <img alt="none" src={message.avatar} />}</div>
            <div
              className="messageCell messageText"
              onMouseEnter={() => this.onMouseEvent(index)}
              onMouseLeave={() => this.onMouseEvent(-1)}
            >
              {message.message}
              {this.state.showEmailIndex === index && <div className="messageEmail"> Contact: {message.email}</div>}
            </div>
            <div className="messageCell messageName">{message.fullName}</div>
            <br />
          </div>

        ))}
      </div>
    );

  };
}

export default Messages;