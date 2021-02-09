import React, { Component } from 'react'
import {Link, withRouter} from "react-router-dom";

class ConfirmEmail extends Component {
    constructor(props) {
        super(props);

        let query = new URLSearchParams(this.props.location.search);

        this.state = {
            firstName: query.get('firstName') || ''
        };
    }

    render() {
        return (
            <div className="confirm-email">
                <div className="confirm-email__title">Подтвердите ваш e-mail</div>
                <div className="confirm-email__sub-title">{this.state.firstName}, на ваш E-mail отправлено письмо со ссылкой для подтверждения. Перейдите по ней, чтобы активировать вашу учетную запись и получить 7 дней бесплатного доступа.</div>

                <div className="btn btn__submit">Перейти к почте</div>

                 <Link className="confirm-email__link" to="/didnt-email">Мне не пришло письмо</Link>

            </div>
        )
    }
}

export default withRouter(ConfirmEmail)