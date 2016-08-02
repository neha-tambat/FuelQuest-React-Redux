/**
 * Created by synerzip on 26/07/16.
 */
import React from 'react';
import {Provider} from 'react-redux';
import routes from '../routes';
import {ReduxRouter} from 'redux-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Root extends React.Component {

    constructor(props) {
        super(props);
        injectTapEventPlugin();
        this.state = {}
    }

    render() {
        return (
            <Provider store={this.props.store}>
                <MuiThemeProvider>
                    <ReduxRouter>
                        {routes}
                    </ReduxRouter>
                </MuiThemeProvider>
            </Provider>
        );
    }
}