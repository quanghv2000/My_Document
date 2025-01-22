import React, { Component } from 'react'
import { connect } from 'react-redux'

class Beef extends Component {

    renderBeef = () => {
        let componentArray = [];
        for (let i = 0; i < this.props.numberOfBeef; i++) {
            let divJSX = <div className="beef" key={i}></div>;
            componentArray.push(divJSX);
        }
        return componentArray;
    }

    render() {
        return (
            <div>
                {this.renderBeef()}
            </div>
        )
    }
}

const mapStateToprops = state => {
    return {
        numberOfBeef: state.BurgerReducer.burger.beef,
    }
}

export default connect(mapStateToprops)(Beef);
