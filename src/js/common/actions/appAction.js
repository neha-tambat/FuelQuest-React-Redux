/**
 * Created by synerzip on 27/07/16.
 */
import {WINDOW_RESIZED,TOGGLE_RIGHT_DRAWER,TOGGLE_LEFT_DRAWER,TOGGLE_FULLSCREEN,
    LEFT_SELECTION_CHANGED} from '../../constants';

export function onWindowResize(){
    return {type:WINDOW_RESIZED}
}

export function toggleRightDrawer(){
    return {type:TOGGLE_RIGHT_DRAWER}
}

export function toggleLeftDrawer(){
    return {type:TOGGLE_LEFT_DRAWER}
}

export function toggleFullScreen(){
    return {type:TOGGLE_FULLSCREEN}
}

export function selectLeftOption(optionKey){
    return {type:LEFT_SELECTION_CHANGED,payload:optionKey};
}