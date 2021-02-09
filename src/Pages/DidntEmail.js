import React, {Component} from 'react'
import {Link} from "react-router-dom";

export default class DidntEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
    }

    render() {
        return (
            <div className="didnt-mount">
                <div className="didnt-mount__title">Мне не пришло письмо</div>
                <div className="didnt-mount__sub-title">Письмо может прийти с задержкой в 5-10 минут.<br/>
                    Также проверьте разные папки почтового ящика (актуально для gmail.com) и папку "Спам".Если письмо
                    все же не пришло, повторите попытку или напишите об этом в тех.поддержку <a
                        href="mailto:support@livedune.ru">support@livedune.ru</a> и мы активируем ваш аккаунт.
                </div>

                <form action="" onSubmit={(e) => { e.preventDefault()}}>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(e) => {
                            this.setState({email: e.target.value})
                        }}
                    />
                    <input type="submit" className="btn btn__submit" value="Отправить  заново"/>
                </form>

                <Link className="didnt-mount__cancel" to="/">Отмена</Link>

            </div>
        )
    }
}