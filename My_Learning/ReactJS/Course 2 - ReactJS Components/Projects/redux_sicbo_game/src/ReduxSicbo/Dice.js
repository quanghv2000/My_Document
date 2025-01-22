import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dice extends Component {

    renderDices = () => {
        return this.props.dices.map((dice, index) => {
            return (
                <img key={index} className="ml-2" style={{ width: '50px', height: '50px' }} src={dice.image} alt="" />
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderDices()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dices: state.SicboReducer.dices,
    }
}

export default connect(mapStateToProps)(Dice)