import React, {Component} from 'react'
import Socials from "../Components/Socials";
import {Link, withRouter} from "react-router-dom";
import {FormErrors} from "../Components/FormErrors";
import Promo from "../Components/Promo";

class SingUp extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            firstName: '',
            email: '',
            password: '',
            promo: '',
            errors: {
                email: ''
            },
            emailValid: false,
            errorMsg: ''
        };
        this.handleInput = this.handleInput.bind(this)
        this.validation = this.validation.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

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

        switch (name) {
            case 'email':
                emailValid = val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                validInputErrors.email = !emailValid && val.length ? 'Возможно вы ошиблись в указании почтового сервиса' : '';
                break;
            default:
                break;
        }

        this.setState({
            errors: validInputErrors,
            emailValid: emailValid,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.validation('email', this.state.email)
        if (this.state.emailValid) {
            this.props.history.push('/confirm-email?firstName=' + this.state.firstName);
        }
    }

    render() {
        return (
            <div className="sign-up">
                <div className="sign-up__title">Регистрация</div>
                <div className="sign-up__sub-title">Зарегистрируйся и получи доступ к аналитике аккаунтов.</div>

                <Socials/>

                <div className="sign-up__text-or">или</div>

                <form action="/" method="post" className="sign-up__form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Имя"
                        value={this.state.firstName}
                        onChange={this.handleInput}
                        className={this.state.error ? 'error' : ''}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleInput}
                        className={this.state.errors.email.length > 0 ? 'error' : ''}
                    />
                    <FormErrors className="sign-up__error" formErrors={this.state.errors}/>
                    <input
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={this.state.password}
                        onChange={this.handleInput}
                        className={this.state.error ? 'error' : ''}
                    />

                   <Promo handleInput={this.handleInput} />

                    <input type="submit" value="Создать аккаунт" className="btn btn__submit"/>
                </form>


                <div className="sign-up__offer">Создавая аккаунт, я согласен <Link to="/offer">с условиями оферты</Link>
                </div>

            </div>
        )
    }
}

export default withRouter(SingUp)