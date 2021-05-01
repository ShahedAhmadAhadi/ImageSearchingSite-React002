import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: ''
        }
    }

    componentDidMount(){
        this.props.inputRef.current.focus()
    }

    write = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    enter = (e) => {
        if(e.charCode === 13){
            this.props.search(this.state.value)
            
        }
    }
    
    render() {
        console.log(this.props)
        let themeValue = {
            inputBackground: 'indigo-900',
            inputTextColor: 'white',
            searchButtonBackground: 'red-800',
            searchButtonOpaciry: '80',
            searchButtonColor: 'white'
        }
        return (
            <div className={`col-start-1 col-end-13 sm:text-center box-border p-4`}>
                <input type="search" value={this.state.value} onChange={this.write} onKeyPress={this.enter} ref={this.props.inputRef} className={`border-2 m-0 border-green-600 p-1 pr-24 bg-${!this.props.theme ? themeValue.inputBackground : 'white'} text-${!this.props.theme ? themeValue.inputTextColor : 'black'} lg:w-1/3 md:w-2/4 sm:w-3/4 w-full rounded outline-none focus:border-gray-500`}/>
                <button className={`bg-${this.props.theme ? 'yellow-300' : themeValue.searchButtonBackground} bg-opacity-${this.props.theme ? '100' : themeValue.searchButtonOpaciry} absolute py-1.5 px-6 font-semibold text-${this.props.theme ? 'black' : themeValue.searchButtonColor} -ml-24 rounded-r hover:bg-yellow-400`} onClick={()=> this.props.search(this.state.value)}>Search</button>
            </div>
        )
    }
}

export { Search }
