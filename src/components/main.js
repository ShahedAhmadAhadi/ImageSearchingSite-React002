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

    imageSize = (size) => {
        if (size >= 140) {
            return 'row-span-2 h-full'
        }
    }
    
    render() {
        let wrap = "place-content-start place-items-center grid grid-cols-8 gap-2 col-start-1 col-end-13 pt-10"
        return (
            <div className="w-full m-0 p-2 grid grid-cols-12 justify-center">
                <Search search={this.search}/>
                <div className={wrap}>
                    {this.state.data && this.state.data.map(item => {
                        let imageDiv = this.imageSize(item.previewHeight)
                        return (
                            <div key={item.id} className={imageDiv}>
                                <img src={item.previewURL} className="p-0"/>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        )
    }
}

export default main
