import React from 'react';
import ReactDom from 'react-dom';
import App from './app/App';
import './index.scss';
import { createStore } from 'redux';
import reducers from './reducers/reducer';
import { Provider } from 'react-redux';

// This is the server-side entry point.
export default (req) => {
    const store = createStore(reducers, {});
    const html = ReactDom.renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );
    const preloadedState = store.getState();
    return { html, preloadedState };
};
