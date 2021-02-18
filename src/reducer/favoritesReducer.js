const INITIAL_STATE = []

export default (state = INITIAL_STATE, action ) => {
    switch(action.type){
        case 'change_favs':
            return [...state, action.payload]
        
        case 'clear_favs':
            return []
        default:
            return state
    }
}