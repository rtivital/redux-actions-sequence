# Redux Actions Sequence

Run sequence of redux actions with provided reducer and initial state.

## Why

To test the behavior of reducer with chained actions.

## Instalation

Install:

```
npm install --save-dev redux-actions-sequence
```

## Usage

Let's assume that you have `mathReducer` that performs math operations. It will look something like this:

```js
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
```

With redux-actions-sequence you can test this reducer with your favorite test runner:

```js
import reduxActionsSequence from 'redux-actions-sequence';

// with initial state
reduxActionsSequence({
  reducer: mathReducer,
  state: 3,
  actions: [
    { type: 'increment' }, // state === 4
    { type: 'add', payload: 10 }, // state === 14
    { type: 'subtract', payload: 2 }, // state === 12
    { type: 'divide', payload: 3 }, // state === 4
    { type: 'multiply', payload: 5 }, // state === 20
  ],
}); // -> 20

// without initial state
reduxActionsSequence({
  reducer: mathReducer,
  actions: [
    { type: 'increment' }, // state === 1
    { type: 'add', payload: 10 }, // state === 11
    { type: 'subtract', payload: 2 }, // state === 9
    { type: 'divide', payload: 3 }, // state === 3
    { type: 'multiply', payload: 5 }, // state === 15
  ],
}); // -> 15
```
