import ActionTypes from '../constants/action.type';

  export const setMessage =(data) => {
    return {
        type: ActionTypes.SET_MESSAGE,
        payload: data
    }
}

export const removeMessage = (data) => {
    return {
        type: ActionTypes.REMOVE_MESSAGE,
        payload: data
    }
}
