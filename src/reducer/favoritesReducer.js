const INITIAL_STATE = []

export default (state = INITIAL_STATE, action ) => {
    switch(action.type){
        case 'change_favs':
            return [...state, action.payload]
        default:
            return state
    }
}