const findMemberById = (members, id) => {
  return members.find(member => {
    return member.id === id;
  });
};

/**
 * Join on member.id=members.userid
 * return a new array with applicable attributes.
 *
 * @param  {...any} members
 * @param  {...any} messages
 */
const joinDataSets = (messages, members) => {
  const joinedDataSets = messages.map(message => {
    // find the member that owns this message
    const member = findMemberById(members, message.userId);

    return {
      avatar: member.avatar,
      email: member.email,
      messageId: message.id,
      message: message.message,
      fullName: `${member.firstName} ${member.lastName}`,
      timestamp: message.timestamp,
      userId: member.id,
    };
  });

  /* Return the joined up array -- but sort it (last first) on timestamp */
  return joinedDataSets.sort((el1, el2) => {
    return el1.timestamp < el2.timestamp ? 1 : -1;
  });
};

/**
 * Given messages, aggregate with member attributes.
 */
export const getAggregatedDataSet = props => {
  return joinDataSets(props.messages, props.members);
};