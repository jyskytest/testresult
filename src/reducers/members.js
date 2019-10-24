import { MEMBERS_LOADED } from '../action-creators/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case MEMBERS_LOADED:
      return action.payload || [];
    default:
      return state;
  }
}
