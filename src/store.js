import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers';
import ReduxThunk  from "redux-thunk";
//const logger = createLogger();

export default function configureStore() {

    const store = createStore(
        rootReducer,
        applyMiddleware(ReduxThunk)
    )

    return store
}


