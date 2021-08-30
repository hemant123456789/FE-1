import ActionTypes from '../constants/action.type';

const inittialState = false;
export const loaderReducer = (state = inittialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_LOADER:
            state = action.payload;
            return action.payload;
            break;
        default:
            return state;
            break;
    }

}