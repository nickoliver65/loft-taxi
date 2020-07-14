import { LOG_IN, LOG_OUT, LOGIN_FAIL } from './auth'

describe('news reducer', () => {

    it('LOG_IN', () => {
        const action = {
            type: LOG_IN,
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isLoggedIn: true,
        })
    })

    it('LOG_OUT', () => {
        const action = {
            type: LOG_OUT,
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isLoggedIn: false,
        })
    })

    it('LOGIN_FAIL', () => {
        const action = {
            type: LOGIN_FAIL,
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isLoginFail: false,
        })
    })

})