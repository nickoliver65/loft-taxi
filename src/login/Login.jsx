import React, { Component } from "react";
import { PropTypes } from 'prop-types'
import { withAuth } from "../AuthContext";

export class Login extends Component {
    goToProfile = (event) => {
        event.preventDefault();
        this.props.navigate("map");
    };
    goToRegistration = (event) => {
        event.preventDefault();
        this.props.navigate("registration");
    };

    authenticate = (event) => {
        event.preventDefault();
        const { email, password } = event.target;
        this.props.logIn(email.value, password.value);
    };

    render() {
        return (
            <>
                {this.props.isLoggedIn ? (
                    <p>
                        Вы благополучно авторизовались{" "}
                        <div></div>
                        <button onClick={this.goToProfile}>
                            Продолжить
            </button>
                    </p>
                ) : (
                        <form onSubmit={this.authenticate}>
                            <label htmlFor="email">Email:</label>
                            <input id="email" type="email" name="email" size="28" />
                            <label htmlFor="password">Password:</label>
                            <input id="password" type="password" name="password" size="28" />
                            <button type="submit">Log in</button>
                            <div></div>
                            <button onClick={this.goToRegistration} name='registration' type="registration">Зарегистрироваться</button>
                        </form>
                    )}
            </>
        );
    }
}

Login.propTypes = {
    isLoggedIn: PropTypes.bool,
    logIn: PropTypes.func,
    navigate: PropTypes.func,
};

export const LoginWithAuth = withAuth(Login);
