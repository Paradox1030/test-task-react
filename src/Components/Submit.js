import React from "react";

import loading from '../assets/images/icons/loading.svg'

export default class Submit extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.loading) {
            return (
                <button type="submit" value="Отправить "
                        className={`btn btn__submit`}><img src={loading} alt=""/> {this.props.text}</button>
            )
        }

        return (
            <button type="submit" value="Отправить "
                    className={`btn btn__submit`}>{this.props.text}</button>
        )
    }
}