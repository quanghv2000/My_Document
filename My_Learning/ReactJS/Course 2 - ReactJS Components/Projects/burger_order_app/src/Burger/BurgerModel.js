import React, { Component } from 'react';
import Beef from './Beef';
import './Burger.css'
import Cheese from './Cheese';
import Salad from './Salad';

export default class BurgerModel extends Component {
    render() {
        return (
            <div className='burger-model'>
                <h3 className="text-danger">Bánh Burger Của Bạn</h3>
                <div className="mt-5">
                    <div className="breadTop"></div>
                    <Salad />
                    <Cheese />
                    <Beef />
                    <div className="breadBottom"></div>
                </div>
            </div>
        )
    }
}
