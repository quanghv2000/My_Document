import React, { Component } from 'react'
import RegisterForm from './RegisterForm'
import UserList from './UserList'

export default class UserManager extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center mt-3">User Manager</h3>
                <RegisterForm />
                <UserList />
            </div>
        )
    }
}
