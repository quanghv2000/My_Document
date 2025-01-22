import React, { Component } from 'react'
import roles from '../Data/roles.json';
import Swal from 'sweetalert2'
import { addNewUser, updateUser } from '../redux/actions/UserManagerAction';
import { connect } from 'react-redux';

class RegisterForm extends Component {

    state = {
        userRegister: {
            id: 0,
            username: '',
            fullName: '',
            password: '',
            email: '',
            phoneNumber: '',
            role: '',
        },
        disabledUpdateBtn: true,
        readOnlyUsername: false,
    }

    handleOnchange = (event) => {
        let { name, value } = event.target;
        let newUserRegister = { ...this.state.userRegister, [name]: value }

        this.setState({
            userRegister: newUserRegister,
        });
    }

    handleRegister = () => {
        let currentUserList = this.props.userList;
        let newUser = { ...this.state.userRegister, id: currentUserList.length + 1 }

        // find user in current user list by username
        let indexOfUserFoundByUserName = currentUserList.findIndex(user => user.username === newUser.username);
        // // if username exist
        if (indexOfUserFoundByUserName !== -1) {
            Swal.fire(
                'Fail!',
                'The username is already in use.',
                'error'
            )
            return;
        } else { // else if username does not exist
            this.setState({
                userRegister: {
                    id: 0,
                    username: '',
                    fullName: '',
                    password: '',
                    email: '',
                    phoneNumber: '',
                    role: '',
                },
                disabledUpdateBtn: true,
            }, () => {
                this.props.dispatch(addNewUser(newUser));
                Swal.fire(
                    'Register Successfully!',
                    'Your account has been successfully created.',
                    'success'
                );
            })
        }
    }

    handleUpdate = () => {
        this.setState({
            disabledUpdateBtn: true,
            readOnlyUsername: false
        }, () => {
            this.props.dispatch(updateUser(this.state.userRegister));
            Swal.fire(
                'Update Successfully!',
                'Your account has been successfully updated.',
                'success'
            );
        })
    }

    renderRoles = () => {
        return roles.map((role, index) => {
            return <option key={index} value={role.name}>
                {role.name}
            </option>
        })
    }

    render() {

        return (
            <div className="mt-4 border">
                <header className="bg-dark text-light p-2" style={{ fontWeight: 'bold' }}>Form Đăng Ký</header>
                <div className="row p-3">
                    <div className="col-6">
                        <div className="mb-3">
                            <label className="form-label">Tài khoản</label>
                            <input type="text" name="username" className="form-control" onChange={this.handleOnchange} value={this.state.userRegister.username} readOnly={this.state.readOnlyUsername} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mật khẩu</label>
                            <input type="text" name="password" className="form-control" onChange={this.handleOnchange} value={this.state.userRegister.password} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="text" name='email' className="form-control" placeholder="email@example.com" onChange={this.handleOnchange} value={this.state.userRegister.email} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label className="form-label">Họ & tên</label>
                            <input type="text" name="fullName" className="form-control" onChange={this.handleOnchange} value={this.state.userRegister.fullName} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Số điện thoại</label>
                            <input type="text" name="phoneNumber" className="form-control" placeholder="+84" onChange={this.handleOnchange} value={this.state.userRegister.phoneNumber} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Loại người dùng</label>
                            <select className="form-control" value={this.state.userRegister.role} name="role" onChange={this.handleOnchange}>
                                {this.renderRoles()}
                            </select>
                        </div>
                    </div>
                    <div className="pl-3">
                        <button className="btn btn-success" onClick={() => {
                            this.handleRegister()
                        }}>Đăng ký</button>

                        <button className="btn btn-primary ml-2" disabled={this.state.disabledUpdateBtn}
                            onClick={() => { this.handleUpdate() }}>
                            Cập nhật
                        </button>
                    </div>
                </div>
            </div >
        )
    }

    // This is lifecycle return prev props and prev state
    // Run after render
    componentDidUpdate(prevProps, prevState) {
        let userEdit = this.props.userEdit;
        if (prevProps.userEdit.id !== userEdit.id) {
            this.setState({
                userRegister: { ...userEdit },
                disabledUpdateBtn: false,
            })
        }
    }

}

const mapStateToProps = state => {
    return {
        userList: state.UserManagerReducer.userList,
        userEdit: state.UserManagerReducer.userEdit,
    }
}

export default connect(mapStateToProps)(RegisterForm);