import { ADDITION } from "../constants/actionsTypes";

const initialState = {
    sum: 0
}

const additionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDITION:
            // return { ...state, sum: action.payload.val1 + action.payload.val2 }
            return { ...state, sum: action.x + action.y }

        default:
            return state;
    }
}

export default additionReducer