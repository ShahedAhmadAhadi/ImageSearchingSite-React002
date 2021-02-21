import React, { Component } from 'react'

export class imageModal extends Component {
  
    
    
    render() {
        const cls = this.props.cls;
        return (
            <div onClick={() => this.props.hide()} className={`col-start-1 col-end-13 fixed w-full h-screen ${cls} grid-rows-6 grid-cols-12 bg-black bg-opacity-70 z-10`}>
                <div className="col-start-12 col-end-13 row-start-1 row-end-2 m-6">
                    <button className="text-gray-200 text-5xl font-light focus:outline-none">&times;</button>
                </div>
                <div className="rounded col-start-3 col-end-10 place-content-center p-2 row-start-1 row-end-7 ">
                    <img src={this.props.src} onClick={(e) => e.stopPropagation()}  className="m-14" />
                </div>
            </div>
        )
    }
}

export default imageModal

