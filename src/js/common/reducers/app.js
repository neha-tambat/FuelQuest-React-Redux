/**
 * Created by synerzip on 26/07/16.
 */
import {createReducer} from '../util';
import {WINDOW_RESIZED,TOGGLE_RIGHT_DRAWER,TOGGLE_LEFT_DRAWER,TOGGLE_FULLSCREEN,
    LEFT_SELECTION_CHANGED} from '../../constants';

const initialState = {
    isFetching: false,
    selectedLeftNavOption: 'dashboard',
    windowHeight:window.innerHeight,
    windowWidth:window.innerWidth,
    rightDrawer:false,
    leftDrawer:true,
    fullScreen: false,
    userInfo:{name:'yogesh.patel@synerzip.com'}
};

export default createReducer(initialState, {
    [WINDOW_RESIZED]:state => {
        return Object.assign({}, state, {
            windowHeight:window.innerHeight,
            windowWidth:window.innerWidth
        });
    },
    [TOGGLE_RIGHT_DRAWER]:state => {
        return Object.assign({}, state, {
            rightDrawer:!state.rightDrawer
        });
    },
    [TOGGLE_LEFT_DRAWER]:state => {
        return Object.assign({}, state, {
            leftDrawer:!state.leftDrawer
        });
    },
    [TOGGLE_FULLSCREEN]: state => {
        return Object.assign({}, state, {
            fullScreen:!state.fullScreen
        });
    },
    [LEFT_SELECTION_CHANGED]:(state,payload)=>{
        return Object.assign({}, state, {
            selectedLeftNavOption:payload
        });
    }
});