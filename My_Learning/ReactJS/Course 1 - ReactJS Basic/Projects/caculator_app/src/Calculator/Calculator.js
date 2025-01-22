import React, { Component } from 'react'
import './Calculator.css'

export default class Calculator extends Component {
    state = {
        txtScreen: '0',
        operator: '',
        process: false,
        firstNumber: 0,
        secondNumber: 0,
        result: 0,
    }

    onClickButtonAC = () => {
        let stateReset = {
            txtScreen: '0',
            operator: '',
            process: false,
            firstNumber: 0,
            secondNumber: 0,
            result: 0,
        }
        this.setState(stateReset);
    }

    onClickButtonInverse = () => {
        let number = parseFloat(this.state.txtScreen);
        let result = parseFloat(number / -1);
        this.setState(
            {
                txtScreen: result.toString(),
                process: true,
                firstNumber: result,
            }
        )
    }

    onClickButtonPercent = () => {
        let number = parseFloat(this.state.txtScreen);
        let result = parseFloat(number / 100);
        this.setState(
            {
                txtScreen: result.toString(),
                process: true,
                firstNumber: result,
            }
        )
    }

    onClickButtonOperator = (operator) => {
        this.setState({
            operator: operator,
            firstNumber: parseFloat(this.state.txtScreen),
            process: true,
        });
    }

    onClickButtonNumber = (number) => {
        let txtNew = '0';
        let process = this.state.process;
        if (process === true) {
            txtNew = number;
        } else {
            let textCurrent = this.state.txtScreen;
            if (textCurrent.length < 13) {
                if (textCurrent === '0') {
                    txtNew = number;
                } else {
                    txtNew = textCurrent + number;
                }
            } else {
                return;
            }
        }

        this.setState(
            {
                txtScreen: txtNew,
                process: false,
            }
        )
    }

    onClickButtonDot = () => {
        let txtNew = '0';
        let process = this.state.process;
        if (process === true) {
            txtNew = '0.';
        } else {
            let textCurrent = this.state.txtScreen;
            if (textCurrent.includes('.')) {
                txtNew = textCurrent;
            } else {
                txtNew = textCurrent +'.';
            }
        }

        this.setState(
            {
                txtScreen: txtNew,
                process: false,
            }
        )
    }

    onClickButtonDelete = () => {
        let textCurrent = this.state.txtScreen;
        let txtNew = '';
        if (textCurrent.length > 1) {
            txtNew = textCurrent.substr(0, textCurrent.length - 1);
        } else {
            txtNew = '0';
        }
        this.setState(
            {
                txtScreen: txtNew,
            }
        )
    }

    onClickButtonEqual = () => {
        let operator = this.state.operator;
        let firstNumber = this.state.firstNumber;
        let result = '0';
        if (operator === '') {
            return;
        } else {
            let secondNumber = this.state.txtScreen;
            switch(operator) {
                case '+': result = parseFloat(firstNumber) + parseFloat(secondNumber); break;
                case '-': result = parseFloat(firstNumber) - parseFloat(secondNumber); break;
                case '*': result = parseFloat(firstNumber) * parseFloat(secondNumber); break;
                case '/': result = parseFloat(firstNumber) / parseFloat(secondNumber); break;
                default: return;
            }
        }

        this.setState(
            {
                txtScreen: result,
                firstNumber: parseFloat(result),
                process: true,
            }
        )
    }

    render() {
        return (
            <div className="container">
                <div className="screen" id="input">{this.state.txtScreen}</div>
                <div className="wrapper">
                    <div className="row">
                        <div className="col-3">
                            <div className="btn light-gray" onClick={() => { this.onClickButtonAC() }}>AC</div>
                            <div className="btn" onClick={() => { this.onClickButtonNumber('7') }}>7</div>
                            <div className="btn" onClick={() => { this.onClickButtonNumber('4') }}>4</div>
                            <div className="btn" onClick={() => { this.onClickButtonNumber('1') }}>1</div>
                            <div className="btn" onClick={() => { this.onClickButtonNumber('0') }}>0</div>
                        </div>
                        <div className="col-3">
                            <div className="btn light-gray" onClick={() => { this.onClickButtonInverse() }}>+/-</div>
                            <div className="btn" onClick={() => { this.onClickButtonNumber('8') }}>8</div>
                            <div className="btn" onClick={() => { this.onClickButtonNumber('5') }}>5</div>
                            <div className="btn" onClick={() => { this.onClickButtonNumber('2') }}>2</div>
                            <div className="btn" onClick={() => { this.onClickButtonDot() }}>.</div>
                        </div>
                        <div className="col-3">
                            <div className="btn light-gray" onClick={() => { this.onClickButtonPercent() }}>%</div>
                            <div className="btn" onClick={() => { this.onClickButtonNumber('9') }}>9</div>
                            <div className="btn" onClick={() => { this.onClickButtonNumber('6') }}>6</div>
                            <div className="btn" onClick={() => { this.onClickButtonNumber('3') }}>3</div>
                            <div className="btn btnDelete" onClick={() => { this.onClickButtonDelete() }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-backspace" viewBox="0 0 16 16">
                                <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
                                <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
                            </svg></div>
                        </div>
                        <div className="col-3">
                            <div className="btn btn-orange" onClick={() => { this.onClickButtonOperator('/')} }>/</div>
                            <div className="btn btn-orange" onClick={() => { this.onClickButtonOperator('*')} }>*</div>
                            <div className="btn btn-orange" onClick={() => { this.onClickButtonOperator('-')} }>-</div>
                            <div className="btn btn-orange" onClick={() => { this.onClickButtonOperator('+')} }>+</div>
                            <div className="btn btn-equal" onClick={() => { this.onClickButtonEqual() }}>=</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
