const niftyReducer = ( state = {}, action) => {
    if (action.type === "XXX") {
        return { ...state, items: action.data }
    }
    return state;
}
export { niftyReducer };