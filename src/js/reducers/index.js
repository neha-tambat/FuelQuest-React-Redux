/**
 * Created by synerzip on 26/07/16.
 */
import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router';

import app from '../common/reducers/app';

export default combineReducers({
    app,
    router: routerStateReducer
});