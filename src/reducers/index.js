import { combineReducers } from 'redux';
import members from './members';
import messages from './messages';

export default combineReducers({
  members,
  messages,
});
