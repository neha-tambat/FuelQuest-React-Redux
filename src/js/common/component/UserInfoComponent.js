/**
 * Created by synerzip on 26/07/16.
 */
import React from 'react';
import {connect} from 'react-redux';
import {IconMenu,IconButton,MenuItem,Divider} from 'material-ui';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import RightDrawerContentForMobile from './RightDrawerContentForMobile';

class UserInfoComponent extends React.Component{

    render(){
        var {userInfo} = this.props;

        return (
            <div className="user-info">
                <div className="user-name-box">{userInfo.name}</div>
                <IconMenu
                    style={{marginTop:5}}
                    iconButtonElement={<IconButton><KeyboardArrowDown color='#FFFFFF'/></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                    <RightDrawerContentForMobile />
                </IconMenu>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    userInfo: state.app.userInfo
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoComponent)