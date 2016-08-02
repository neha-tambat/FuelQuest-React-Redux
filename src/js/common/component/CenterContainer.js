/**
 * Created by synerzip on 27/07/16.
 */
import React,{Component} from 'react';
import { connect } from 'react-redux';
import {getScreenMode} from '../util/index';

class CenterContainer extends Component{

    render(){
        var {windowHeight,windowWidth,leftDrawer} = this.props;
        var screenSize = getScreenMode();

        var widthDiff = (screenSize == "large") ? 184 : 166;
        if(screenSize == 'small' || screenSize == 'xsmall'){
            widthDiff = (screenSize == "large") ? 84 : 66;
        }else{
            if(!leftDrawer){
                widthDiff = (screenSize == "large") ? 84 : 66;
            }

        }

        return (
            <div className="center-container" style={{minHeight:(windowHeight-60),width:(windowWidth - widthDiff)}}>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    windowHeight: state.app.windowHeight,
    windowWidth: state.app.windowWidth,
    leftDrawer: state.app.leftDrawer

});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CenterContainer)
