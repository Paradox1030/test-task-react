import React, {Component} from 'react'
import {
    Link
} from "react-router-dom";

import lock from '../assets/images/icons/lock.svg';
import email from '../assets/images/icons/email.svg';
import Submit from "../Components/Submit";


export default class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textSubmit: 'Отправить ',
            email: '',
            errorEmail: false,
            loading: false,
            send: false
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    email = 'example@example.com'

    handleEmail(e) {
        this.setState({email: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()

        if (this.state.email !== this.email) {
            this.setState({errorEmail: true})
        } else {
            this.setState({errorEmail: false, textSubmit: 'Отправка', loading: true})
            setTimeout(() => this.setState({send: true}), 3000)
        }
    }

    render() {
        if (this.state.send) {
            return (
                <div className="reset-password success">
                    <img src={email} alt="Восстановление пароля" className="reset-password__img"/>
                    <div className="reset-password__title">Письмо отправлено</div>
                    <div className="reset-password__sub-title">На указанный вами e-mail было отправлено письмо для смены
                        пароля
                    </div>
                    <Link to="/" className="btn btn__submit">Вернуться на главную</Link>
                </div>
            )
        }
        return (
            <div className="reset-password">
                <img src={lock} alt="Восстановление пароля" className="reset-password__img"/>
                <div className="reset-password__title">Восстановить пароль</div>
                <div className="reset-password__sub-title">Введите e-mail, на который регистрировались ранее</div>
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text" name="email" disabled={this.state.loading} onChange={this.handleEmail}
                           placeholder="ip@livedune.com"/>
                    <div className="reset-password__error">{this.state.errorEmail ? 'Не верный email' : ''}</div>
                    <Submit loading={this.state.loading} text={this.state.textSubmit}/>
                </form>
                <Link className="reset-password__cancel" to="/">Отмена</Link>
            </div>
        );
    }
}