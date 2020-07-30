import baseUrl from "./constants.js";

export const signUp = data =>
  fetch(baseUrl+'/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());

export const signIn = data =>
  fetch(baseUrl+'/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());

export const getAddresses = () =>
  fetch(baseUrl+'/addressList').then(res => res.json());

export const getRoute = (address1, address2) =>
  fetch(
    baseUrl+'/route?address1=' +
    address1 +
    '&address2=' +
    address2
  ).then(res => res.json());

export const loadCard = token =>
  fetch(baseUrl+'/card?token=' + token).then(res =>
    res.json()
  );

export const updateCard = data =>
  fetch(baseUrl+'/card', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
