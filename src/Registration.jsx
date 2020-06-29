import React from 'react'
import {ActionBtn} from './App.js'

export const Registration = (props) =>
{
    return <>
    <form>
        <h1>Регистрация</h1>
        <input type = 'email' name = 'email' size = '30' placeholder = 'Адрес электронной почты'></input>       
        <input type = 'text' name = 'firstname' size = '30' placeholder = 'Имя'></input>       
        <input type = 'text' name = 'lastname' size = '30' placeholder = 'Фамилия'></input>       
        <input type = 'password' name = 'password' size = '30' placeholder = 'Пароль'></input>  
        <ActionBtn placeholder = {"Вход"} onClick = {()=>{props.navigateTo("map")}}/>     
    </form>
    </>
}
//ex