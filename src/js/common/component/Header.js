/**
 * Created by synerzip on 26/07/16.
 */
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActionCreator from '../actions/appAction';
import {getScreenMode} from '../util/index';
import UserInfoComponent from './UserInfoComponent';
import RightMoreButton from './RightMoreButton';
import  CollapseLeftMenu from 'material-ui/svg-icons/hardware/keyboard-backspace';
import  OpenLeftMenu from 'material-ui/svg-icons/navigation/menu';
import Fullscreen from 'material-ui/svg-icons/navigation/fullscreen';
import Fullscreen_exit from 'material-ui/svg-icons/navigation/fullscreen-exit';
import {IconMenu,IconButton,MenuItem,Divider} from 'material-ui';

class Header extends React.Component{

    constructor(){
        super();
    }

    componentWillMount(){
        //var screenSize = getScreenMode();
        //console.log("screenSize : ",screenSize);
        //if(screenSize == "small"){
        //    this.toggle_LeftDrawer();
        //}
        //this.setState({screenMode: screenSize});
    }

    toggle_LeftDrawer(){
        var {appActions} = this.props;
        appActions.toggleLeftDrawer();
    }
    toggle_FullScreen(){
        var {appActions} = this.props;
        appActions.toggleFullScreen();
    }

    render(){

        var LeftPanelIcon = null;
        var FullScreenIcon = null;
        var Username = null;
        var screenSize = getScreenMode();
        var {leftDrawer,fullScreen} = this.props;

        if(screenSize == 'small' || screenSize == 'xsmall'){
            Username = null;
        }else{
            var LeftPanelOperation = leftDrawer ?
                <CollapseLeftMenu color='#FFFFFF'/> : <OpenLeftMenu color='#FFFFFF'/> ;
            var fullScreenOperation = fullScreen ?
                <Fullscreen_exit color="#FFFFFF" /> : <Fullscreen color="#FFFFFF" />;

            LeftPanelIcon = (
                <div className="left-collapse-button">
                    <IconButton onClick={this.toggle_LeftDrawer.bind(this)}>
                        {LeftPanelOperation}
                    </IconButton>
                </div>
            );

            FullScreenIcon =  (
                <div className="left-collapse-button">
                    <IconButton onClick={this.toggle_FullScreen.bind(this)}>
                        {fullScreenOperation}
                    </IconButton>
                </div>
            );
            Username = (<UserInfoComponent> </UserInfoComponent>);
        }

        return (
            <div className="header">
                <div className="logo-container"> </div>

                {LeftPanelIcon}
                {FullScreenIcon}
                <RightMoreButton />
                {Username}

            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    windowHeight: state.app.windowHeight,
    windowWidth: state.app.windowWidth,
    selectedLeftNavOption:state.app.selectedLeftNavOption,
    leftDrawer: state.app.leftDrawer,
    fullScreen: state.app.fullScreen
});

const mapDispatchToProps = (dispatch) => ({
    appActions: bindActionCreators(appActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)