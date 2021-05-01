import React, { Component } from 'react'

class ThemeCheckbox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theme : true,

        }
    }


    
    updateTheme = () => {
        this.setState({
            theme: !this.state.theme
        })
        console.log('object')
    }

    render() {
        return (
            <div>
                <label onClick={() => {this.props.themeChanger(); this.updateTheme()}} className="w-10 h-5 bg-gray-200 rounded-full absolute inset-6 pointer" htmlFor="check">
                    <div className={`w-6 h-6 bg-black rounded-full absolute ${this.state.theme ? '-intset-x-0' : 'inset-x-4'} -inset-y-0.5`}>
                        <i className={`bi bi-${this.state.theme ? 'brightness-high' : 'moon'} text-white absolute -inset-y-0.5 inset-x-0.5`}></i>
                    </div>
                </label>
                <input type='checkbox' id="check" className="hidden" />
            </div>
        )
    }
}

export default ThemeCheckbox

