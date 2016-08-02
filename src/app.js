/**
 * Created by nikhila on 9/25/2015.
 */
import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './js/store/configureStore';
import Root from './js/container/Root';

//import Main from './js/container/Main';

const store = configureStore(window.__INITIAL_STATE__);

ReactDOM.render(<Root store={store} />, document.getElementById('main'));
