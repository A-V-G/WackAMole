import React, { Component } from 'react'

export class SetDelayMole extends Component {
    render() {
        const {disabled, handler, delay} = this.props;
        return (
            <div className="control-panel__item">
                <p>Choise delay for Mole</p>
                <input disabled={disabled} onChange={handler} type="range" id="delay" min="1" max="10" step="1" value={delay}></input>
            </div>
        )
    }
}

export default SetDelayMole
