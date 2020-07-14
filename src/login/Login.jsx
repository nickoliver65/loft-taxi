import React, { Component } from "react";
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { authenticate } from '../actions'
import { Link} from 'react-router-dom'

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
        this.props.authenticate(email.value, password.value);
    };

    render() {
        return (
            <>
            {this.props.isLoginFail && <div>Your login/password is not valid</div>}
                {this.props.isLoggedIn ? (
                    <p>
                        Вы благополучно авторизовались{" "}
                        <div></div>
                        <nav>
                            <Link to="/map"><button>Продолжить</button></Link>
                        </nav>     
                    </p>
                ) : (
                        <form onSubmit={this.authenticate}>
                            <label htmlFor="email">Email:</label>
                            <input id="email" type="email" name="email" size="28" />
                            <label htmlFor="password">Password:</label>
                            <input id="password" type="password" name="password" size="28" />
                            <button type="submit">Log in</button>
                            <div></div>
                            <Link to="/registration"><button name='registration' type="registration">Зарегистрироваться</button></Link>
                        </form>
                    )}
            </>
        );
    }
}

Login.propTypes = {
    isLoggedIn: PropTypes.bool,
    isLoginFail: PropTypes.bool,
    logIn: PropTypes.func,
    navigate: PropTypes.func,
    authenticate: PropTypes.func,
    LoginWithAuth: PropTypes.func
};

export const LoginWithAuth = connect(
    (state) => ({ isLoggedIn: state.auth.isLoggedIn,isLoginFail: state.auth.isLoginFail }),
    { authenticate }
)(Login)