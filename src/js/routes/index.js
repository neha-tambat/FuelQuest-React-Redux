/**
 * Created by nikhila on 9/25/2015.
 */
let React = require('react');
let {
    Router,
    Route,
    IndexRoute ,
    browserHistory
    } = require('react-router');


import About from '../container/About';
import App from '../container/App';


var Routes = (
        <Route path='/' component={App}>
            <IndexRoute component={About} />
        </Route>
);

export default Routes;