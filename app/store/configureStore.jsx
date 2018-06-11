var redux = require('redux');
var thunk = require('redux-thunk').default
var {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require('./.../reducers/index');

export var configure = () => {
  // Combined - Reducer function:
const reducer = redux.combineReducers({
	name: nameReducer,
	hobbies: hobbiesReducer,
	movies: moviesReducer,
	map: mapReducer,
});
// Create Store:
const store = redux.createStore(reducer, redux.compose(
  redux.applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f))

return store;
};
