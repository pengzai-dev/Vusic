import React from 'react';
import ReactDom from 'react-dom';
import App from './app/App';
import './index.scss';
import store from './sotre';
import { Provider } from 'react-redux';

ReactDom.hydrate(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
