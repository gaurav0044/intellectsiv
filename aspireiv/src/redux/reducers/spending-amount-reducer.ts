import { ADD_SPEND_ERROR, ADD_SPEND_SUCCESS, GET_SPEND_ERROR, GET_SPEND_SUCCESS } from "../actions/types"

const initialState = {
    spending: '',
    currentDeal: null,
    isFetching: false,
    error: false
}

export default  (state = initialState, action) => {
    switch (action.type) {
            case ADD_SPEND_SUCCESS:
                    return {
                            ...state,
                            action
                    }
            case ADD_SPEND_ERROR:
                    return {
                            ...state,
                            error: true,
                            action
                    }
            case GET_SPEND_SUCCESS:
                    return {
                            ...state,
                            action
                    }
            case GET_SPEND_ERROR:
                    return {
                            ...state,
                            error: true,
                            action
                    }
            default:
                    return state
    }
}