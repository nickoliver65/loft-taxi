import React from 'react'
import {ActionBtn} from './App.js'

export const Login = (props) =>
{
    return <>
    <form>
    <h1>Войти</h1>
    <label htmlFor = 'email'>Email:</label>
    <input type = 'email' name = 'email' size = '30'></input>
    <ActionBtn placeholder = {"Вход"} onClick = {()=>{props.navigateTo("map")}}/>
    <ActionBtn placeholder = {"Регистрация"} onClick = {()=>{props.navigateTo("registration")}}/>
    </form>
    </>
}
//ex