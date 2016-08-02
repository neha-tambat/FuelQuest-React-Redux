/**
 * Created by synerzip on 27/07/16.
 */
import React,{Component} from 'react';
import { bindActionCreators } from 'redux';
import * as appActionCreator from '../actions/appAction';
import { connect } from 'react-redux';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import ListIcon from 'material-ui/svg-icons/editor/format-list-bulleted';
import MapIcon from 'material-ui/svg-icons/maps/satellite';
import {getScreenMode} from '../util/index';

class LeftOptionComponent extends Component{

    onOptionSelected(){
        var {appActions,optionKey} = this.props;
        appActions.selectLeftOption(optionKey);
    }

    render(){
        var {selectedLeftNavOption,optionKey,leftDrawer} = this.props;
        var screenSize = getScreenMode();
        var styleClass = 'left-option';
        var optionIcon = null;
        var label = null;
        var selectedMarker = <span />;

        var iconColor = 'rgba(117,117,117,.9)';
        if(optionKey == selectedLeftNavOption){
            styleClass = 'left-option-selected';
            selectedMarker = <div className='selection-marker'> </div>;
            //iconColor = '#FFFFFF';
            iconColor = 'rgb(54, 69, 155)';
        }

        var labelString = '';
        if(optionKey == 'dashboard'){
            labelString = 'Dashboard';
            optionIcon = <DashboardIcon  style={{color:iconColor,width:35,height:35}}/>;
        }else if(optionKey == 'map'){
            labelString = 'Map';
            optionIcon = <MapIcon  style={{color:iconColor,width:35,height:35}}/>;
        }else if(optionKey == 'network'){
            labelString = 'Network';
            optionIcon = <ListIcon  style={{color:iconColor,width:35,height:35}}/>;
        }

        label = <div style={{padding:15}}>{labelString}</div>;
        var optionClassName = styleClass;
        if(screenSize == 'small' || screenSize == 'xsmall'){
            label = null;
            optionClassName = styleClass +'-close';
        }else{
            if(!leftDrawer){
                label = null;
                optionClassName = styleClass +'-close';
            }
        }

        return (
            <div onClick={this.onOptionSelected.bind(this)} className={optionClassName}>
                {optionIcon}
                {label}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    windowHeight: state.app.windowHeight,
    windowWidth: state.app.windowWidth,
    selectedLeftNavOption:state.app.selectedLeftNavOption,
    leftDrawer: state.app.leftDrawer
});

const mapDispatchToProps = (dispatch) => ({
    appActions: bindActionCreators(appActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftOptionComponent)