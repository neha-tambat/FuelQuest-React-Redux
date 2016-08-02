/**
 * Created by synerzip on 27/07/16.
 */
import React,{Component} from 'react';
import { bindActionCreators } from 'redux';
import * as appActionCreator from '../actions/appAction';
import { connect } from 'react-redux';
import LeftOptionComponent from './LeftOptionComponent';
import {getScreenMode} from '../util/index';

class LeftNavigationComponent extends Component{

    render(){
        var {windowHeight,leftDrawer} = this.props;
        var screenSize = getScreenMode();
        var leftClassName = 'left-navigation-open';
        var poweredBy = <div className="powered-by-logo-container">
            <div className="powered-by-logo"/>
        </div>;
        if(screenSize == 'small' || screenSize == 'xsmall'){
            leftClassName = 'left-navigation-close';
            poweredBy = null;
        }else{
            if(!leftDrawer){
                leftClassName = 'left-navigation-close';
                poweredBy = null;
            }

        }
        return (
            <div style={{height:(windowHeight - 60)}}
                 className={leftClassName}>
                <LeftOptionComponent optionKey="dashboard"/>
                <LeftOptionComponent optionKey="network"/>
                <LeftOptionComponent optionKey="map"/>

                { poweredBy }
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
    appActions: bindActionCreators(appActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftNavigationComponent)