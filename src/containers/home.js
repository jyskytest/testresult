import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadMembers } from '../action-creators/members';
import { loadMessages } from '../action-creators/messages';
import Messages from './messages';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadMessages();
    this.props.loadMembers();
  }

  render() {
    const isLoading = this.props.messages.length === 0 || this.props.members.length === 0;
    return (
      <div>
        {isLoading && <h1>{'Loading...'}</h1>}

        {!isLoading && (
          <div>
            <h1>
              {this.props.messages.length} {'Messages have been loaded'}
            </h1>
            <Messages messages={this.props.messages} members={this.props.members} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  members: state.members,
  messages: state.messages,
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadMembers, loadMessages }, dispatch);

Home.propTypes = {
  loadMembers: PropTypes.func,
  loadMessages: PropTypes.func,
  members: PropTypes.array,
  messages: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
