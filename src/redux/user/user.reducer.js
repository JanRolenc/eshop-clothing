import { UserActionsTypes } from "./user.types"; //video 123./3:30m
const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => { //od ES6 mohu nastavit defaulni hodnotu, tedy pokud nebude jina, bude tato
    switch (action.type) {
        // case 'SET_CURRENT_USER': po zavedeni user.types.js menime na:
        case UserActionsTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;