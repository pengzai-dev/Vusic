import { createStore } from 'redux';
import reducers from '../reducers/reducer';

/**
 * store frome ssr INIT_STORE_STATE
 */
const DEV_INIT_STATE =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
const INIT_STORE_STATE = window.INIT_STORE_STATE || DEV_INIT_STATE;
const store = createStore(reducers, INIT_STORE_STATE);
export default store;
