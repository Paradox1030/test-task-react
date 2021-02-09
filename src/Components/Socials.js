import React, {Component} from 'react'

import facebook from '../assets/images/icons/facebook.svg';
import google from '../assets/images/icons/google.svg';

export default class Socials extends Component {
    render() {
        return (
            <div className="socials">
                <div className="socials__item"><img src={facebook} alt="facebook-icon"/>
                    <span>Войти
                    через Facebook</span>
                </div>
                <div className="socials__item"><img src={google} alt="google-icon"/> <span> Войти
                    через Google</span>
                </div>
            </div>
        )
    }
}