const initialState = 0;
const changeNumbers = (state=initialState, action)=>{
    if (action.type === "Increment") {
        return state+1
    }
    if (action.type === "Decrement") {
        return state-1
    }
    return state
}

export default changeNumbers