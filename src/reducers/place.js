import types from 'Root/actions'
let data = {
    
}

export default (state = { ...data }, action) => {
    switch(action.type) {
        case types.place.DATA: 
            return action.data
        default:
            return state
    }
}