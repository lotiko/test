import React, { Component } from 'react'

export class Temperature extends Component {

    state = {
        temp: "",
    }

    handelChange = (e) => {
    this.setState({temp: e.target.value})
}
    render() {
        return (
            <div className="temp">
                <h1>Temperature</h1>
                <input onChange={(e) => this.handelChange(e)} type="number" name="temp" id="temp-input" placeholder="Temperature in °C" value={this.state.temp}></input>
                {
                    this.state.temp && (
                        (this.state.temp < 10 && <h4 className="t-blue">It's cold ❄️</h4>) ||
                        (this.state.temp > 9 && this.state.temp < 30 && <h4 className="t-blue">It's nice 🌼</h4>) ||
                        <h4 className="t-blue">It's warm 🌞</h4>       
                    )  
                }
            </div>
        )
    }
}

export default Temperature
