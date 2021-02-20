import React, { Component } from 'react'

export class imageModal extends Component {
    render() {
        return (
            <div >
                <img src={this.props.src}  />
            </div>
        )
    }
}

export default imageModal

