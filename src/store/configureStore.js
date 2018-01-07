import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Old line of code for viewing Redux in explorer: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//Store Creation
export default () => {
    const store = createStore(
        combineReducers({
			auth: authReducer
        }),
		composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};


