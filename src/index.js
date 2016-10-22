import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';
import './style.scss';

injectTapEventPlugin();

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);