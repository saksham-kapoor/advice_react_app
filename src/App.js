import React, { Component } from 'react'
import './App.css';
import axios from 'axios';


class App extends Component {

    state = {
        advice : '',
    };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = async () => {
        this.setState({advice : 'Loading...'});
        const response = await axios.get("https://api.adviceslip.com/advice");

        const {advice} = await response.data.slip;
        console.log(advice);
        // this.setState({advice:advice}); if key and value are same, we can omit the latter like -
        this.setState({advice});
    };

    render() {
        const {advice} = this.state;
       
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}><span>Give me advice</span></button>
                </div>
            </div>
        )
    }
}

export default App