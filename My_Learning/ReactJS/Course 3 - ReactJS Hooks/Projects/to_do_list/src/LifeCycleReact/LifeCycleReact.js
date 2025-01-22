import React, { Component } from 'react'
// import { Button } from '../Components/Button';
import ChildComponent from './ChildComponent'

export default class LifeCycleReact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 1,
        };
        console.log('constructor');
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    render() {
        return (
            <div>
                Life Cycle - Number: 1
                <ChildComponent />
            </div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
}
