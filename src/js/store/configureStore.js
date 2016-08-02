import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import createLogger from 'redux-logger';
import routes from '../routes';
import createHistory from 'history/lib/createHashHistory';
import {reduxReactRouter} from 'redux-router';

export default function configureStore(initialState) {
    let createStoreWithMiddleware;

    const logger = createLogger();
    let history = createHistory({
        queryKey: false
    });

    const middleware = applyMiddleware(thunk, logger);

    createStoreWithMiddleware = compose(
        middleware,reduxReactRouter({ routes, history })
    );

    const store = createStoreWithMiddleware(createStore)(rootReducer, initialState);

    if (module.hot) {
        module.hot
            .accept('../reducers', () => {
                const nextRootReducer = require('../reducers/index');
                store.replaceReducer(nextRootReducer);
            });
    }

    return store;

}
