import React, { Component } from 'react'
import {Search} from './search'

class main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data: false
        }
    }

    search = async(value) =>{
        let data = await fetch(`https://pixabay.com/api/?key=20223274-42276db0604df23b312b7ef2f&q=${value}&image_type=photo`);
        data = await data.json()
        this.setState({
            data: data.hits
        })
        console.log(data)
    }
    
    render() {
        return (
            <div className="w-full m-0 p-2 grid grid-cols-12 justify-center">
                <Search search={this.search}/>
                {this.state.data && this.state.data.map(item => {
                    return (
                        <div key={item.id}>
                            <img src={item.previewURL} />
                        </div>
                    )
                })}
                <div>
                    
                </div>
            </div>
        )
    }
}

export default main
