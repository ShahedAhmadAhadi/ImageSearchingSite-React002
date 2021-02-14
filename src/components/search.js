import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: ''
        }
    }

    write = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    
    render() {
        return (
            <div className="col-start-1 col-end-13 text-center pt-4">
                <input type="search" value={this.state.value} onChange={this.write} className='border-2 p-1 w-1/3 rounded'/>
                <button className="bg-yellow-400 py-1.5 px-6 font-semibold -ml-24 rounded" onClick={()=> this.props.search(this.state.value)}>Search</button>
            </div>
        )
    }
}

export { Search }
