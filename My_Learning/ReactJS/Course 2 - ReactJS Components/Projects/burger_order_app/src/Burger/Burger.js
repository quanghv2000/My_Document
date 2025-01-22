import React, { Component } from 'react'
import BurgerMenu from './BurgerMenu'
import BurgerModel from './BurgerModel'

export default class Burger extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="mt-5">Burger Exercise CyberSoft</h1>
                <div className="row mt-5">
                    <div className="col-6">
                        <BurgerModel />
                    </div>
                    <div className="col-6">
                        <BurgerMenu />
                    </div>
                </div>
            </div>
        )
    }
}
