import { combineReducers } from 'redux';
import {messageReducer} from '../reducers/messageReducer';
import {loaderReducer} from '../reducers/loaderReducer';
const reducer = combineReducers({
    message: messageReducer,
    loader: loaderReducer
});

export default reducer;