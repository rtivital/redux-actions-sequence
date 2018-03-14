function reduxActionsSequence({ reducer, actions, state = undefined }) {
  if (actions.length === 1) {
    return reducer(state, actions[0]);
  }

  return reduxActionsSequence({
    reducer,
    actions: actions.slice(1),
    state: reducer(state, actions[0]),
  });
}

module.exports = reduxActionsSequence;
