import {baseUrl} from './constants.js'

export const serverLogIn = async (email, password) => {
    return fetch(
        `${baseUrl}auth?username=${email}&password=${password}`
    ).then(res => res.json());
  };

 
export const cardSend = async (card_num, card_date, hold_name, cvc,authToken) => {
    return   fetch(baseUrl+"card",
    {
        method: "POST",
        body: JSON.stringify({
            'cardNumber': card_num,
            'expiryDate': card_date,
            'cardName': hold_name,
            'cvc': cvc,
            'token': authToken
          })
    })
    .then(res => res.json()).then(data => data)
  };