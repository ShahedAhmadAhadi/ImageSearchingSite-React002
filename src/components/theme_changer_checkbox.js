import React, { Component } from 'react'

export class ThemeCheckbox extends Component {
    render() {
        return (
            <div>
                <label onClick={() => this.props.theme()} className="w-10 h-5 bg-gray-200 rounded-full absolute inset-6 pointer" htmlFor="check">
                <div className="w-6 h-6 bg-black rounded-full absolute -inset-x-1 -inset-y-0.5"></div>
                </label>
                <input type='checkbox' id="check" className="hidden" />
            </div>
        )
    }
}

export default ThemeCheckbox

