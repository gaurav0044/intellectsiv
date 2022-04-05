import { ADD_ANGER_ERROR, ADD_ANGER_SUCCESS, GET_ANGER_ERROR, GET_ANGER_SUCCESS } from "../actions/types"

const initialState = {
    angerMeter: '',
    angerLevel: '',
    currentDeal: null,
    isFetching: false,
    error: false
}

export default  (state = initialState, action) => {
    switch (action.type) {
            case ADD_ANGER_SUCCESS:
                    return {
                            ...state,
                            action
                    }
            case ADD_ANGER_ERROR:
                    return {
                            ...state,
                            error: true,
                            action
                    }
            case GET_ANGER_SUCCESS:
                    return {
                            ...state,
                            action
                    }
            case GET_ANGER_ERROR:
                    return {
                            ...state,
                            error: true,
                            action
                    }
            default:
                    return state
    }
}