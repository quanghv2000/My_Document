import { ADD_NEW_USER, DELETE_USER, EDIT_USER, UPĐATE_USER } from "../types/UserManagerType";

const addNewUser = (newUser) => ({
    type: ADD_NEW_USER,
    newUser,
});

const deleteUser = (userId) => ({
    type: DELETE_USER,
    userId,
});

const editUser = (userEdit) => ({
    type: EDIT_USER,
    userEdit,
});

const updateUser = (userUpdate) => ({
    type: UPĐATE_USER,
    userUpdate,
});

export {
    addNewUser,
    deleteUser,
    editUser,
    updateUser,
}