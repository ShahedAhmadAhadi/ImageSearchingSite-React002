import React, { Component } from 'react'
import {Search} from './search'
import Head from './head'
import Imagemodal, { imageModal } from './image-modal'

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
        let amount = 25
        let data = await fetch(`https://pixabay.com/api/?key=20223274-42276db0604df23b312b7ef2f&q=${value}&safesearch=true&image_type=photo&per_page=${amount}`);
        data = await data.json()
        this.setState({
            data: data.hits,
            val: value,
            amount: amount
        })
        console.log()
    }

    imageSize = (size) => {
        if (size >= 140) {
            return 'row-span-2 h-full'
        }
    }

    more = async() => {
        let moreData = this.state.amount * 2
        console.log(this.state.amount)
        let data = await fetch(`https://pixabay.com/api/?key=20223274-42276db0604df23b312b7ef2f&q=${this.state.val}&safesearch=true&image_type=photo&per_page=${moreData}`);
        data = await data.json();
        this.setState({
            data: data.hits,
            amount: moreData
        })
        console.log(data)
    }

    showBig = (item) => {
        console.log(item)
        this.setState({
            bigPic: item
        })
    }

    
    render() {
        let wrap = "place-content-start place-items-center grid 2xl:grid-cols-12 xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-3 gap-2 col-start-1 col-end-13 pt-10";
        let load = "col-start-1 col-end-13 justify-center text-gray-300 mt-48 font-semibold text-3xl";
        let noResult = Array.isArray(this.state.data) && this.state.data == false;
        return (
            <div className="w-full m-0 p-0 grid grid-cols-12 justify-center relative">
                {this.state.bigPic && <Imagemodal src={this.state.bigPic.webformatURL} />}
                <header className="col-start-1 col-end-13 bg-green-400 shadow-md">
                    <Head/>
                    <Search search={this.search} inputRef={this.inputRef} />
                </header>
                <div className={wrap}>
                    {this.state.data === false && <p className={load}>Loading...</p>}
                    {this.state.data && this.state.data.map(item => {
                        let imageDiv = this.imageSize(item.previewHeight)
                        return (
                            <div onClick={() => this.showBig(item)} key={item.id} className={imageDiv}>
                                <img src={item.previewURL} className="p-0"/>
                            </div>
                        )
                    })}
                    {noResult && <p className={load}>No Result</p>}
                    {this.state.data && this.state.amount < 200 && !noResult && <a onClick={this.more} className="hover:underline text-m text-blue-900 cursor-pointer">Load More...</a>}
                </div>
            </div>
        )
    }
}

export default main
