import React, { Component } from 'react'

export class SelectQuantityHole extends Component {
    render() {
        const {disabled, handler} = this.props;
        return (
            <div className="control-panel__item">
                <p>Choise quantity Hole</p>
                <select disabled={disabled} onChange={handler}>
                <option selected>3</option>
                <option>6</option>
                <option>9</option>
                <option>12</option>
                </select>
            </div>
        )
    }
}

export default SelectQuantityHole
