const initialState = {
    data : []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_DATA':
            return{
                ...state,
                data: action.value
            }
            break;
        default:
            return state;
            break;
    }
}

export default reducer;