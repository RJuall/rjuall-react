import React from "react";

export class AppChild extends React.Component {

    constructor(props) {
        super(props);    
    }

    render() {
        return <span>this.props.name</span>;
    }
}