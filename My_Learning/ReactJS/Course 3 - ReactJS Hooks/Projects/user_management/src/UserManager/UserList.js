import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteUser, editUser } from '../redux/actions/UserManagerAction'

class UserList extends Component {

    renderUserList = () => {
        return this.props.userList.map((user, index) => {
            return <tr key={index}>
                <th scope="row">{user.id}</th>
                <td>{user.username}</td>
                <td>{user.fullName}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.role}</td>
                <td>

                    <button className="btn btn-primary btn-sm"
                        onClick={() => {this.props.dispatch(editUser(user))}}>
                        Chỉnh sửa
                    </button>

                    <button className="btn btn-danger btn-sm ml-2"
                        onClick={() => {this.props.dispatch(deleteUser(user.id))}}>
                        Xoá
                    </button>

                </td>
            </tr>
        })
    }

    render() {
        return (
            <div className="mt-4 border">
                <header className="bg-dark text-light p-2" style={{ fontWeight: 'bold' }}>Danh sách người dùng</header>
                <div className="p-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tài khoản</th>
                                <th scope="col">Họ & tên</th>
                                <th scope="col">Mật khẩu</th>
                                <th scope="col">Email</th>
                                <th scope="col">Số điện thoại</th>
                                <th scope="col">Loại người dùng</th>
                                <th scope="col">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderUserList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userList: state.UserManagerReducer.userList,
    }
}

export default connect(mapStateToProps)(UserList)
