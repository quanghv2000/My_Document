import { themes } from "../../Themes/ThemesManager";
import { ToDoListDarkTheme } from "../../Themes/ToDoListDarkTheme";
import { ADD_NEW_TASK, CHANGE_THEME, DELETE_TASK, DONE_TASK, EDIT_TASK, UPDATE_TASK } from "../types/ToDoListType";

const initialState = {
    theme: ToDoListDarkTheme,
    taskList: [
        { id: 1, name: 'Task One', completed: false },
        { id: 2, name: 'Task Two', completed: false },
        { id: 3, name: 'Task Three', completed: true },
        { id: 4, name: 'Task Four', completed: true },
    ],
    taskEdit: { id: '', name: '', completed: false },
}

const ToDoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TASK: {
            let { newTask } = action;

            // check task empty
            if (newTask.name.trim() === '') {
                alert('Task name is required!');
                return { ...state };
            }

            let index = state.taskList.findIndex(task => task.name === newTask.name);
            // check task exist
            if (index !== -1) {
                alert('Task name already exist!');
                return { ...state };
            }
            state.taskList = [...state.taskList, newTask];
            return { ...state };
        }

        case DONE_TASK: {
            let newTaskList = state.taskList;
            let { taskDone } = action;
            // find task in task list
            let index = newTaskList.findIndex(task => task.id === taskDone.id);
            if (index !== -1) {
                newTaskList[index] = taskDone;
            }
            state.taskList = [...newTaskList];
            return { ...state };
        }

        case EDIT_TASK: {
            return { ...state, taskEdit: action.taskEdit };
        }

        case UPDATE_TASK: {
            state.taskEdit = {...state.taskEdit, name: action.taskUpdate };
            
            let taskListUpdate = [...state.taskList];

            let index = taskListUpdate.findIndex(task => task.id === state.taskEdit.id);

            if (index !== -1) {
                taskListUpdate[index] = state.taskEdit;
            }

            state.taskList = taskListUpdate;
            state.taskEdit = {id: '', name: '', completed: false};

            return {...state};
        }

        case DELETE_TASK: {
            console.log(action);
            state.taskList = state.taskList.filter(task => task.id !== action.taskId);
            return { ...state };
        }

        case CHANGE_THEME: {
            let theme = themes.find(theme => theme.id === action.themeId).theme;
            if (theme) {
                state.theme = { ...theme };
            }

            return { ...state };
        }

        default:
            return { ...state };
    }
}

export default ToDoListReducer;