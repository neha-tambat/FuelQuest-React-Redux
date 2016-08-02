/**
 * Created by synerzip on 24/06/16.
 */
import React from 'react';
import {connect} from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';

export function requireMasking(Component) {

    class MaskComponent extends React.Component {
        render() {
            return (
                <div>
                    <Component {...this.props}/>
                    {
                        this.props.isFetching
                            ?
                            <div className="mask-progress">
                                <CircularProgress style={{margin:'auto'}}/>
                            </div>
                            :
                            <div />
                    }
                </div>
            )

        }
    }
    const mapStateToProps = (state) => ({
        isFetching: state.application.isFetching
    });

    return connect(mapStateToProps)(MaskComponent);
}