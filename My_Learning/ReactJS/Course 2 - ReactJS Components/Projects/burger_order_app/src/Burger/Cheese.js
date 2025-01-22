import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cheese extends Component {

    renderCheese = () => {
        let componentArray = [];
        for (let i = 0; i < this.props.numberOfCheese; i++) {
            let divJSX = <div className="cheese" key={i}></div>;
            componentArray.push(divJSX);
        }
        return componentArray;
    }

    render() {
        return (
            <div>
                {this.renderCheese()}
            </div>
        )
    }

}

const mapStateToprops = state => {
    return {
        numberOfCheese: state.BurgerReducer.burger.cheese,
    }
}

export default connect(mapStateToprops)(Cheese);