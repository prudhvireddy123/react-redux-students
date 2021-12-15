
export const ACTION_INCREMENT = 'INCREMENT'
export const ACTION_DECREMENT = 'DECREMENT'

const counterReducer = (state = { count: 10 }, action) => {
    if (action.type === ACTION_INCREMENT) {
        return { count: state.count + 1 }
    }
    if (action.type === ACTION_DECREMENT) {
        return { count: state.count - 1 }
    }
    return state
}

export default counterReducer;