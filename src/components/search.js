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
    
    render() {
        return (
            <div className="col-start-1 col-end-13 text-center pt-4">
                <input type="search" value={this.state.value} onChange={this.write} ref={this.props.inputRef} className='border-2 p-1 pr-24 w-1/3 rounded outline-none focus:border-gray-500'/>
                <button className="bg-yellow-300 py-1.5 outline-none px-6 font-semibold -ml-24 rounded-r hover:bg-yellow-400" onClick={()=> this.props.search(this.state.value)}>Search</button>
            </div>
        )
    }
}

export { Search }
