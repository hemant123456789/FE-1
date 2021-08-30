import { combineReducers } from 'redux';
import {messageReducer} from '../reducers/messageReducer';

const reducer = combineReducers({
    message: messageReducer
});

export default reducer;