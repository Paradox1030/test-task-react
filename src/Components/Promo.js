import React, {Component} from 'react'

export default class Promo extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showInput: false
        }

        this.handleShow = this.handleShow.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    handleShow() {
        this.setState({showInput: true})
    }

    handleInput(e) {
        this.props.handleInput(e)
    }

    render() {
        if (this.state.showInput) {
            return (
                <input
                    type="text"
                    name="promo"
                    placeholder="Промокод"
                    value={this.props.promo}
                    onChange={this.handleInput}
                />
            )
        }

        return (
            <button className="sign-up__promo" onClick={this.handleShow}>У меня есть промокод</button>
        )
    }
}