const reduxActionsSequence = require('../lib');
const test = require('tape');

function mathReducer(state = 0, action) {
  switch (action.type) {
    case 'multiply':
      return state * action.payload;

    case 'divide':
      return state / action.payload;

    case 'add':
      return state + action.payload;

    case 'subtract':
      return state - action.payload;

    case 'increment':
      return state + 1;

    default:
      return state;
  }
}

test('reduxActionsSequence', (t) => {
  t.equals(
    reduxActionsSequence({
      reducer: mathReducer,
      actions: [
        { type: 'increment' },
        { type: 'add', payload: 10 },
        { type: 'subtract', payload: 2 },
        { type: 'divide', payload: 3 },
        { type: 'multiply', payload: 5 },
      ],
    }),
    15,
    'Without initial state',
  );

  t.equals(
    reduxActionsSequence({
      reducer: mathReducer,
      state: 3,
      actions: [
        { type: 'increment' },
        { type: 'add', payload: 10 },
        { type: 'subtract', payload: 2 },
        { type: 'divide', payload: 3 },
        { type: 'multiply', payload: 5 },
      ],
    }),
    20,
    'With initial state',
  );

  t.end();
});
