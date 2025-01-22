import { ADD_NEW_TASK, UPDATE_TASK, EDIT_TASK, DELETE_TASK, CHANGE_THEME, DONE_TASK } from "../types/ToDoListType";

const addNewTask = (newTask) => ({
    type: ADD_NEW_TASK,
    newTask
})

const doneTask = (taskDone) => ({
    type: DONE_TASK,
    taskDone
})

const updateTask = (taskUpdate) => ({
    type: UPDATE_TASK,
    taskUpdate
})

const editTask = (taskEdit) => ({
    type: EDIT_TASK,
    taskEdit
})

const deleteTask = (taskId) => ({
    type: DELETE_TASK,
    taskId
})

const changeTheme = (themeId) => ({
    type: CHANGE_THEME,
    themeId
})

export {
    addNewTask,
    updateTask,
    editTask,
    deleteTask,
    changeTheme,
    doneTask,
}