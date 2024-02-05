const esReducer = (state = {}, action) => {
    if (action.type === "ESXXX") {
        return { ...state, items: action.data }
    }
    return state;
}
export { esReducer };