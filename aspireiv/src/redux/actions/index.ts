import {ADD_SPEND_REQUEST,GET_SPEND_REQUEST} from "./types";

export const getSpends = () => {
    return { type: GET_SPEND_REQUEST, payload: {} } 
}

export const addSpends = (data) => {
    return { type: ADD_SPEND_REQUEST, payload:data }
}