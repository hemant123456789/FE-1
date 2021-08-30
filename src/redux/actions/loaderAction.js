import ActionTypes from '../constants/action.type';

  export const setLoader =(data) => {
    return {
        type: ActionTypes.SET_LOADER,
        payload: data
    }
}