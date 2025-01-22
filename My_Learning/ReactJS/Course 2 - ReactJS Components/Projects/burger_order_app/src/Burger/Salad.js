import React, { Component } from 'react'
import { connect } from 'react-redux'

class Salad extends Component {

    renderSalad = () => {
        let componentArray = [];
        for (let i = 0; i < this.props.numberOfSalad; i++) {
            let divJSX = <div className="salad" key={i}></div>;
            componentArray.push(divJSX);
        }
        return componentArray;
    }

    render() {
        return (
            <div>
                {this.renderSalad()}
            </div>
        )
    }
}

const mapStateToprops = state => {
    return {
        numberOfSalad: state.BurgerReducer.burger.salad,
    }
}

export default connect(mapStateToprops)(Salad);
