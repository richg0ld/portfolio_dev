import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducerApp from './reducers';

import App from './components/App';
import './style.scss';

const store = createStore(reducerApp);
const rootElement = document.getElementById('root');

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);