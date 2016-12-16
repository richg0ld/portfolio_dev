import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducerApp from './reducers';

import App from './components/App';
import './style.scss';

const store = createStore(reducerApp);
const rootElement = document.getElementById('root');


// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     rootElement
// );

const About = React.createClass({
    render() {
        return (
        <div>
            <h1>About</h1>
            <p>{this.props.params.namedd}</p>
        </div>
        )
    }
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App} />
            <Route path="/routeA/:namedd" component={About} />
        </Router>
    </Provider>,
    rootElement
);