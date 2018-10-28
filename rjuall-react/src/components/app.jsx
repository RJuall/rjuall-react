import React from "react";
import "../lib/rj-react.css"
import { AppChild } from "./app-child";

export class App extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            name: "Rob",
            count: 0,
            em: false,
            inherit: "Inherit"
        };
    }

    onClick() {
        let count2 = this.state.count + 1;
        this.setState({count : count2});
    }

    componentDidMount() {
        console.log("Hello");
        if (this.state.em === false) {
            this.setState({em : true});
        } 
    }

    renderH1(){
        return !this.state.em ? 
            <h1>HELLO WORLD</h1> : <h1><em>HELLO WORLD</em></h1>
    }

    render(){
        return (
            <div>
                {this.renderH1()}
                <button onClick={this.onClick.bind(this)}>{this.state.count}</button>
                <AppChild name={this.state.inherit}/>
            </div>      
        );
    };
}