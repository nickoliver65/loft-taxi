import { AUTHENTICATE, logIn, CARD_INFO } from "../actions";
import { serverLogIn, cardSend } from '../api'

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const { email, password } = action.payload;
    const success = await serverLogIn(email, password)
    if (success.success) {
      console.log(success);
      store.dispatch(logIn())
    }
  }
  else if (action.type === CARD_INFO) {
    const { card_num, card_date, hold_name, cvc, token } = action.payload;
    const success = await cardSend(card_num, card_date, hold_name, cvc, token)
    if (success.success) {
      console.log(success);
      alert("success")
      store.dispatch(logIn())
    }
    else
    {
      alert("error")
      console.log(success)
    }
  }
  else {
    next(action);
  }


};
