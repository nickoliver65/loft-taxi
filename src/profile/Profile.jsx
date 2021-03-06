import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

import { connect } from 'react-redux'
import { saveCardInfo } from '../actions'

export const DrawMenuLinks = () => {
    return (
        <nav>
            <Link to="/"><button>Home page</button></Link>
            <Link to="/map"><button>Map</button></Link>
            <Link to="/profile"><button>Profile</button></Link>
        </nav>
    ) 
}

export class Profile extends Component {

    saveCardInfo = (event) => {
        event.preventDefault();
        const { card_num, card_date, hold_name, cvc } = event.target;
        this.props.saveCardInfo(card_num.value, card_date.value, hold_name.value, cvc.value);
    };

    render() {
        return (

            <>
                <div>
                    <DrawMenuLinks/>
                </div>

                <form onSubmit={this.saveCardInfo}>
                    <h1>Профиль</h1>
                    <h1>Способ оплаты</h1>

                    <label htmlFor="card_num">Номер карты</label>
                    <input id="card_num" type="number" name="card_num" size="28" />

                    <label htmlFor="card_date">Срок действия</label>
                    <input id="card_date" type="card_date" name="card_date" size="28" />

                    <label htmlFor="hold_name">Имя владельца</label>
                    <input id="hold_name" type="hold_name" name="hold_name" size="28" />

                    <label htmlFor="cvc">Имя владельца</label>
                    <input id="cvc" type="cvc" name="cvc" size="28" />

                    <button>Сохранить</button>
                </form>

            </>
        );
    }
}

Profile.propTypes = {
    isLoggedIn: PropTypes.bool,
    isCardSended: PropTypes.bool,
    ProfileWithConnect: PropTypes.func
};

export const ProfileWithConnect = connect(
    (state) => ({ isLoggedIn: state.auth.isLoggedIn, isCardSended: state.auth.isCardSended }),
    { saveCardInfo }
)(Profile)