const reducer = (state, action) => {
    let {payload, type} = action
    switch (type) {
        case 'UPDATE_LISTER':
            return {
                ...state,
                lister: [...payload]
            }
        case 'SET_LOADING_STATE':
            return {
                ...state, isLoading: payload
            }
        case 'SET_HAS_MORE_ITEMS_TO_LOAD':
            return {
                ...state, hasMoreItemsToLoad: payload
            }
        case 'SET_NEXT_PAGE_TO_LOAD':
            return {
                ...state,
                nextPageToLoad: payload
            }
    }
    return state
}
export default reducer