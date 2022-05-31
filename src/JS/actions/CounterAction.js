import { DECREMENT, INCREMENT, TOGGLE } from "../constants/actionsTypes"


export const increment = () => {
    return {
        type: INCREMENT
    }
}
export const decrement = () => {
    return {
        type: DECREMENT
    }
}
export const toggle = () => {
    return {
        type: TOGGLE
    }
}

