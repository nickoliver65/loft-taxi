export const serverLogIn = async (email, password) => {
    return fetch(
        `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
    ).then(res => res.json()).then(data => data);
  };

 
export const cardSend = async (card_num, card_date, hold_name, cvc,authToken) => {
    return   fetch("https://loft-taxi.glitch.me/card",
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