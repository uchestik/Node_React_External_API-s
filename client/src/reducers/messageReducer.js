export default function(state={}, action){
    switch(action.type){
        case 'GET_SIGNIN':
            return{...state,signin:action.payload}
        case 'SEND_MESSAGE':
            return{...state, messagePost:action.payload}
        default:
            return state
    }
}