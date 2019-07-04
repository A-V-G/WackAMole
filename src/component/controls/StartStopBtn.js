import React, { Component } from 'react'

export class StartBtn extends Component {
    render() {
        const {disabled, handler, mode} = this.props;

        if(mode === "start") {
           return (
            <div className="control-panel__item">
                <p>Click to Start Game!!!</p>
                <button disabled={disabled} onClick={handler}>Start!</button>
            </div>
            )
        } else {
            return (
            <div className="control-panel__item">
                <p>Click to Stop Game!!!</p>
                <button onClick={handler}>Stop!</button>
            </div>
            )
        }
                
    }
}

export default StartBtn
