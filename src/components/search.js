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
        let theme_value = {
            input_background: 'black'
        }
        return (
            <div className={`col-start-1 col-end-13 bg-${!this.props.theme ? theme_value.input_background : 'white'} sm:text-center box-border p-4`}>
                <input type="search" value={this.state.value} onChange={this.write} onKeyPress={this.enter} ref={this.props.inputRef} className='border-2 m-0 p-1 pr-24 lg:w-1/3 md:w-2/4 sm:w-3/4 w-full rounded outline-none focus:border-gray-500'/>
                <button className="bg-yellow-300 absolute py-1.5 px-6 font-semibold -ml-24 rounded-r hover:bg-yellow-400" onClick={()=> this.props.search(this.state.value)}>Search</button>
            </div>
        )
    }
}

export { Search }
