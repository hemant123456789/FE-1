import ActionTypes from '../constants/action.type';

const inittialState = {
    type: 'success',
    flag: false,
    message: null
};
export const messageReducer = (state = inittialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_MESSAGE:
            return { ...state, ...action.payload };
            break;
        default:
            return state;
            break;
    }

}