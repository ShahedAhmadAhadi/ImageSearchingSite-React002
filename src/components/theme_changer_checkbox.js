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
                <label onClick={() => {this.props.themeChanger(); this.updateTheme()}} className={`bg-${this.state.theme ? 'indigo-900' : 'purple-50'} w-10 h-5 rounded-full absolute inset-6 pointer`} htmlFor="check">
                    <div className={`w-6 h-6 bg-${this.state.theme ? 'purple-50' : 'black'}  rounded-full absolute ${this.state.theme ? '-intset-x-0' : 'inset-x-4'} -inset-y-0.5`}>
                        <i className={`bi bi-${this.state.theme ? 'moon' : 'brightness-high'}  text-${this.state.theme ? 'black' : 'white'} absolute -inset-y-0.5 inset-x-1 `}></i>
                    </div>
                </label>
                <input type='checkbox' id="check" className="hidden" />
            </div>
        )
    }
}

export default ThemeCheckbox

