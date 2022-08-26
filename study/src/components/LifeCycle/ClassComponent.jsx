import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentWillUnmount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        clearInterval(this.timerID);

    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return {







        }
    };
}
