import React, { Component } from 'react'

export class imageModal extends Component {
    render() {
        return (
            <div className="col-start-1 col-end-13 absolute w-full h-screen bg-black bg-opacity-50 z-10 flex justify-center items-center">
                <div className="w-2/3 bg-white  justify-center item-center rounded-lg text-right">
                    <button className="text-gray-400 text-xl font-semibold bg-gray-200 rounded-full text-right px-1">&times;</button>
                    <img src={this.props.src}  className="m-14" />
                </div>
            </div>
        )
    }
}

export default imageModal

