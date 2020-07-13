
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const CARD_INFO = "CARD_INFO";
export const CARD_SENDED = "CARD_SENDED";

export const logIn = () => ({ type: LOG_IN })
export const logOut = () => ({ type: LOG_OUT })
export const authenticate = (email, password) => ({ type: AUTHENTICATE, payload: { email, password } })
export const saveCardInfo = (card_num, card_date, hold_name, cvc, token) => ({ type: CARD_INFO, payload: { card_num, card_date, hold_name, cvc, token } })
export const cardSended = () => ({ type: CARD_SENDED })
