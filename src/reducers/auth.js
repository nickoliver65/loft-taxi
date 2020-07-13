import {LOG_IN,LOG_OUT,CARD_SENDED} from '../actions'


const initialState = {
    isLoggedIn:false,
    isCardSended:false
}

export default function(state = initialState, action){
    switch(action.type){
        case LOG_IN: {
            return {isLoggedIn:true}
        }
        case LOG_OUT: {
            return {isLoggedIn:false}
        }
        case CARD_SENDED: {
            return {isCardSended:true}
        }
        default:
        {
           return state
        }
    }
}