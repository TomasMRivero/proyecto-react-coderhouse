import { FINISH_LOADING, START_LOADING } from "../actions/uiActions"

const initialState = {
    loading: false
}

export const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case START_LOADING:
            return {
                loading: true
            }
        case FINISH_LOADING:
            return {
                loading: false
            }
        default:
            return state;
    }
}