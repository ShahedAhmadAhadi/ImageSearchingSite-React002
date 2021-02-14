import React, { Component } from 'react'
import {Search} from './search'

class main extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {

        }
    }

    search = async(value) =>{
        this.setState({
            data: false
        })
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
        let wrap = "place-content-start place-items-center grid 2xl:grid-cols-12 xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-3 gap-2 col-start-1 col-end-13 pt-10";
        let load = "col-start-1 col-end-9 justify-center text-gray-300 mt-48 font-semibold text-3xl";
        let noResult = Array.isArray(this.state.data) && this.state.data == false;
        return (
            <div className="w-full m-0 p-2 grid grid-cols-12 justify-center">
                <Search search={this.search} inputRef={this.inputRef}/>
                <div className={wrap}>
                    {this.state.data === false && <p className={load}>Loading...</p>}
                    {this.state.data && this.state.data.map(item => {
                        let imageDiv = this.imageSize(item.previewHeight)
                        return (
                            <div key={item.id} className={imageDiv}>
                                <img src={item.previewURL} className="p-0"/>
                            </div>
                        )
                    })}
                    {noResult && <p className={load}>No Result</p>}
                </div>
                
            </div>
        )
    }
}

export default main
