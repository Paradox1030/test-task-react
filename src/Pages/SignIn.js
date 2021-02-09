import React, {Component} from 'react'
import {
    Link
} from "react-router-dom";

import Socials from '../Components/Socials';
import {FormErrors} from "../Components/FormErrors";

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {
                email: '',
                password: ''
            },
            emailValid: false,
            passwordValid: false,

        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validation = this.validation.bind(this);
    }

    email = 'example@example.com'
    password = 'password2021'


    handleInput = (event) => {
        const name = event.target.name
        const value = event.target.value

        this.setState({[name]: value}, () => {
            this.validation(name, value)
        })
    }

    validation(name, val) {
        let validInputErrors = this.state.errors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (name) {
            case 'email':
                emailValid = val.length < 1
                validInputErrors.email = emailValid ? 'Введите email' : '';
                break;
            case 'password':
                passwordValid = val.length === 0
                validInputErrors.password = passwordValid ? 'Введите пароль' : '';
                break;
            default:
                break;
        }

        this.setState({
            errors: validInputErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'error');
    }

    handleSubmit(event) {
        this.validation('email', this.state.email)
        this.validation('password', this.state.password)

        if (this.state.email === this.email && this.state.password === this.password) {
            this.setState({
                errors: {email: '', password: ''},
                emailValid: true,
                passwordValid: true
            })
            alert('Отправленное: ' + this.state.email + this.state.password);
        } else if ((this.state.email !== 'example@example.com' && this.state.email.trim() !== '') || (this.state.password !== 'password2021' && this.state.password.trim() !== '')) {
            this.setState({
                errors: {email: 'Неверный email', password: 'или пароль'}, emailValid: false,
                passwordValid: false
            })
        }


        event.preventDefault();
    }

    render() {
        return (
            <div className="sign-in">
                <div className="sign-in__title">Войти</div>
                <div className="sign-in__sub-title">Добро пожаловать, рады видеть вас снова 👋</div>

                <Socials/>

                <div className="sign-in__text-or">или</div>

                <form action="/" method="post" className="sign-in__form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleInput}
                        className={this.errorClass(this.state.errors.email)}
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInput}
                        className={this.errorClass(this.state.errors.password)}
                    />
                    <FormErrors className="sign-in__error" formErrors={this.state.errors}/>
                    {/*<div className="sign-in__error">{this.state.errorMsg}</div>*/}
                    <input type="submit" value="Войти в аккаунт" className="btn btn__submit"/>
                </form>


                <Link className="sign-in__reset-password" to="/reset-password">Забыли пароль?</Link>

            </div>
        )
    }
}