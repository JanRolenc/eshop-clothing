import UserActionTypes from './user.types'; //toto importujeme po zavedeni user.types



export const setCurrentUser = user => ({
    // type: 'SET_CURRENT_USER',//po zavedeni user.types menime na:
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});