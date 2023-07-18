import React from 'react';
import ReactDom from 'react-dom/server';
import App from './app/App';
import './index.scss';
import { createStore } from 'redux';
import reducers from './reducers/reducer';
import { Provider } from 'react-redux';

// This is the server-side entry point.
export default (req) => {
    const store = createStore(reducers, {});
    console.log('req.originalUrl', req.originalUrl);
    const html = ReactDom.renderToString(
        <Provider store={store}>
            <App location={req.originalUrl}/>
        </Provider>
    );
    const preloadedState = store.getState();
    return { html, preloadedState };
};
