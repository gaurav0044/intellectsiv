import {ADD_ANGER_REQUEST,GET_ANGER_REQUEST} from "./types";

export const getAngers = () => {
    return { type: GET_ANGER_REQUEST, payload: {} } 
}

export const addAngers = (data) => {
    return { type: ADD_ANGER_REQUEST, payload:data }
}