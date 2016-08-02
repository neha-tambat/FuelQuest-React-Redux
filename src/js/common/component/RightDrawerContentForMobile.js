/**
 * Created by nehat on 8/1/2016.
 */

import React from 'react';
import {connect} from 'react-redux';
import {IconMenu,IconButton,MenuItem,Divider} from 'material-ui';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import {getScreenMode} from '../util/index';

class RightDrawerContentForMobile extends React.Component {

    handleRightDrawerSelectedOption(){

    }

    render(){
        var {rightDrawer,userInfo} = this.props;
        var screenSize = getScreenMode();
        var userNameForMobile = null;
        if(screenSize == "small" || screenSize == "xsmall"){
            userNameForMobile = (
                <MenuItem>
                    {userInfo.name}
                </MenuItem>
            );
        }

        return(
            <div>
                {userNameForMobile}
                <Divider />
                <MenuItem onTouchTap={this.handleRightDrawerSelectedOption.bind(this)}>Home</MenuItem>
                <MenuItem onTouchTap={this.handleRightDrawerSelectedOption.bind(this)}>Fore Site</MenuItem>
                <Divider />
                <MenuItem onTouchTap={this.handleRightDrawerSelectedOption.bind(this)}>Sign Out</MenuItem>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.app.userInfo,
    rightDrawer: state.app.rightDrawer
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RightDrawerContentForMobile)