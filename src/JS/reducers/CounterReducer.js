import { DECREMENT, INCREMENT, TOGGLE } from "../constants/actionsTypes";


const initialState = {
    count: 0,
    show: false
}

const CounterReducer = (state = initialState, action) => {

    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 }
        case DECREMENT:
            return { ...state, count: state.count - 1 }

        case TOGGLE:
            return { ...state, show: !state.show }

        default:
            return state;
    }

}

export default CounterReducer