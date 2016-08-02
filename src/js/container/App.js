/**
 * Copyright (c) 2016-present, SYNERZIP SOFTECH PVT, LTD.
 * All rights reserved.
 *
 * Created by nikhila on 04/02/16.
 */

'use strict';

var React = require('react');
var DOM = require('react-dom');
import Header from '../common/component/Header';
import { bindActionCreators } from 'redux';
import * as appActionCreator from '../common/actions/appAction';
import { connect } from 'react-redux';
import LeftNavigationComponent from '../common/component/LeftNavigationComponent';
import CenterContainer from '../common/component/CenterContainer';
import {Drawer,AppBar,MenuItem,Divider} from 'material-ui';
import {getScreenMode} from '../common/util';
import RightDrawerContentForMobile from '../common/component/RightDrawerContentForMobile';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    handleResize(){
        var {appActions} = this.props;
        appActions.onWindowResize();
    }

    componentDidMount(){
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize);
    }

    toggleRightDrawer(open){
        var {appActions} = this.props;
        appActions.toggleRightDrawer();
    }

    render() {
        var screenSize = getScreenMode();
        console.log("screenMode : ", screenSize);
        console.log(this.props.windowWidth);
        var {rightDrawer,fullScreen} = this.props;
        var RightDrawerContent_Mobile = null;
        var FullScreen = null;

        if(screenSize == 'small' || screenSize == 'xsmall'){
            RightDrawerContent_Mobile = <RightDrawerContentForMobile />;
        }else{
            RightDrawerContent_Mobile = null;
        }

        if(fullScreen){
            FullScreen = "app-body";
        }else {
            FullScreen = "app-body-full-screen"
        }

        return (
            <div className={FullScreen}>
                <Header/>
                <div className="body-container">
                    <LeftNavigationComponent />
                    <CenterContainer>
                        {this.props.children}
                    </CenterContainer>
                </div>
                <Drawer width={300} openSecondary={true} open={rightDrawer}
                        containerStyle={{marginTop:8}}
                        docked={false} onRequestChange={this.toggleRightDrawer.bind(this)}>

                    {RightDrawerContent_Mobile}
                </Drawer>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    windowHeight: state.app.windowHeight,
    windowWidth: state.app.windowWidth,
    rightDrawer:state.app.rightDrawer,
    fullScreen: state.app.fullScreen
});

const mapDispatchToProps = (dispatch) => ({
    appActions: bindActionCreators(appActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
