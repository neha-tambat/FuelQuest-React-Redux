/**
 * Created by synerzip on 26/07/16.
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import * as appActionCreator from '../actions/appAction';
import { connect } from 'react-redux';
import {Drawer,AppBar,IconButton} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


class RightMoreButton extends React.Component{
    constructor(props){
        super(props);

    }

    openDrawer(){
        var {appActions} = this.props;
        appActions.toggleRightDrawer();
    }
    render(){
        return (
            <div className="right-more-button">
                <IconButton onTouchTap={this.openDrawer.bind(this)}>
                    <MoreVertIcon color='#FFFFFF'/>
                </IconButton>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    appActions: bindActionCreators(appActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(RightMoreButton)