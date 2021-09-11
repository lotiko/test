import React, { Component } from 'react'

export class CustomizeImage extends Component {
    state = {
        size: "",
        uri: ""
    }
    render() {
        return (
            <div className="image">
                <h1>Customize Image</h1>
                <input type="text"></input>
                <input type="range" name="range"></input>
            </div>
        )
    }
}

export default CustomizeImage
