// Externals
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// Reducers
import rootReducer from './rootReducer';

const composedEnhancer = applyMiddleware(thunkMiddleware);

const store = createStore(rootReducer, composedEnhancer);

export type AppDispatch = typeof store.dispatch;
export type GetState = typeof store.getState;

export default store;
