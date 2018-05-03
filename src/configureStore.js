import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {}
};

const configureStore = () => {
  const middlewares = [ thunk ];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger({ collapsed: true }));
  }
  const store = createStore(
    rootReducer,
    loadState(),
    applyMiddleware(...middlewares));

  store.subscribe(
    throttle(() => {
      saveState({
        auth: {
          isLoggedIn: store.getState().auth.isLoggedIn,
        },
        fitness: {
          fitness: store.getState().fitness.fitness,
          fitnesses: store.getState().fitness.fitnesses,
        },
        user: store.getState().user,
      });
    },
    1000));

  return store;
};

export default configureStore;
