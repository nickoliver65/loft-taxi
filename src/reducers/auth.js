import { LOG_IN, LOG_OUT, CARD_SENDED, LOGIN_FAIL } from '../actions'


const initialState = {
    isLoggedIn: false,
    isCardSended: false,
    isLoginFail:false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOG_IN: {
            return { isLoggedIn: true}
        }
        case LOG_OUT: {
            return { isLoggedIn: false }
        }
        case CARD_SENDED: {
            return { isCardSended: true }
        }
        case LOGIN_FAIL: {
            return { isLoginFail:true }
        }
        default:
            {
                return state
            }
    }
} 