import React, { Component } from 'react'
import {Search} from './search'
import Head from './head'
import Imagemodal, { imageModal } from './image-modal'
import ThemeChanger from './theme_changer_checkbox'

class main extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            visible:false,
            theme: true
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
        console.log(data)
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
        console.log(this.state.data)
    }

    showBig = (item) => {
        console.log(item)
        this.setState({
            visible:!this.state.visible,
            bigPic: item
        })
    }
    hide = (e) => {
        this.setState((prev)=>{
            return ({
                visible:!prev.visible
            })
        })
    }

    changeTheme = () => {
        this.setState((prev)=> {
            return ({
                theme: !prev.theme
            })
        })
        console.log(this.state.theme)
    }

    
    render() {
        let wrap = "place-content-start place-items-center grid 2xl:grid-cols-12 xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-3 gap-2 col-start-1 col-end-13 pt-10";
        let load = "col-start-1 col-end-13 justify-center text-gray-300 mt-48 font-semibold text-3xl";
        let noResult = Array.isArray(this.state.data) && this.state.data == false;
        let theme_values = {
            background: 'white',
            opacity: '100',
            header_background: 'green-400',
            header_opaciry: '100'
        }
        if (!this.state.theme) {
            theme_values = {
                background: 'blue-900',
                opacity: '100',
                header_background: 'green-900',
                header_opaciry: '90'
            }
        }
        return (
            <div className={`w-full h-screen bg-${theme_values.background} bg-opacity-${theme_values.opacity} m-0 p-0 grid grid-cols-12 justify-center relative`}>
                {this.state.bigPic && <Imagemodal src={this.state.bigPic.largeImageURL} cls={this.state.visible?"grid":'hidden'} hide={this.hide}/>}
                <header className={`col-start-1 col-end-13 bg-${theme_values.header_background} bg-opacity-${theme_values.header_opaciry} shadow-md h-20`}>
                    <Head theme={this.state.theme}/>
                    <Search search={this.search} inputRef={this.inputRef} theme={this.state.theme} />
                    <ThemeChanger themeChanger={() => this.changeTheme()} />
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
