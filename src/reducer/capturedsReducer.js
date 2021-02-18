const INITIAL_STATE = []

export default (state = INITIAL_STATE, action ) => {
    switch(action.type){
        case 'change_caps':
            return [...state, action.payload]

        case 'clear_caps':
            return []
        default:
            return state
    }
}