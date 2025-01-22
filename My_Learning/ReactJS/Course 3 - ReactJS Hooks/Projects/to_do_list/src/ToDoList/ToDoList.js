import React, { Component } from 'react';
import { Container } from '../Container/Container';
import { ThemeProvider } from 'styled-components';
// import { ToDoListDarkTheme } from '../Themes/ToDoListDarkTheme';
// import { ToDoListLightTheme } from '../Themes/ToDoListLightTheme';
// import { ToDoListPrimaryTheme } from '../Themes/ToDoListPrimaryTheme';
import { Dropdown } from '../Components/Dropdown';
import { Heading3 } from '../Components/Heading';
import { TextField } from '../Components/TextField';
import { Button } from '../Components/Button';
import { Table, Th, Tr, Thead } from '../Components/Table';
import { connect } from 'react-redux';
import { addNewTask, changeTheme, deleteTask, doneTask, editTask, updateTask } from '../redux/actions/ToDoListAction';
import { themes } from '../Themes/ThemesManager';

class ToDoList extends Component {

    state = {
        taskName: '',
        disabled: true,
    }

    // deleteTask = (taskId) => {
    //     this.props.dispatch(this.deleteTask(taskId));
    // }

    renderTaskToDo = () => {
        return this.props.taskList.filter(task => !task.completed).map((task, index) => {
            return <Tr key={index}>
                <Th style={{ verticalAlign: 'middle' }}>{task.name}</Th>
                <Th className="text-right">

                    <Button><i className="fa fa-edit" onClick={() => {
                        this.setState({
                            disabled: false,
                        }, () => this.props.dispatch(editTask(task)))
                    }}></i></Button>

                    <Button onClick={() => {
                        let taskDone = { ...task, completed: true };
                        this.props.dispatch(doneTask(taskDone));
                    }}><i className="fa fa-check"></i></Button>

                    <Button onClick={() => this.props.dispatch(deleteTask(task.id))}><i className="fa fa-trash"></i></Button>
                </Th>
            </Tr>
        })
    }

    renderTaskCompleted = () => {
        return this.props.taskList.filter(task => task.completed).map((task, index) => {
            return <Tr key={index}>
                <Th style={{ verticalAlign: 'middle' }}>{task.name}</Th>
                <Th className="text-right">
                    <Button><i className="fa fa-trash" onClick={() => this.props.dispatch(deleteTask(task.id))}></i></Button>
                </Th>
            </Tr>
        })
    }

    renderTheme = () => {
        return themes.map((theme, index) => {
            return <option value={theme.id} key={index}>
                {theme.name}
            </option>
        })
    }

    // componentWillReceiveProps(newProps) {
    //     console.log('this.props', this.props);
    //     console.log('newProps', newProps);
    //     this.setState({
    //         taskName: newProps.taskEdit.name,
    //     })
    // }

    // static getDerivedStateFromProps(newProps, currentState) {
    //     console.log(newProps);
    //     let newState = {...currentState, taskName: newProps.taskEdit.name};

    //     return newState;
    // }

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Container className='w-50 mt-5'>
                    <Dropdown onChange={(e) => {
                        let themeId = e.target.value;
                        this.props.dispatch(changeTheme(themeId))
                    }}>
                        {this.renderTheme()}
                    </Dropdown>
                    <Heading3>To Do List</Heading3>
                    <TextField label="Task name" className="w-50" name="taskName"
                        onChange={(e) => {
                            this.setState({
                                taskName: e.target.value,
                            }, () => { console.log(this.state) });
                        }} value={this.state.taskName} />

                    <Button className="ml-2" onClick={() => {
                        let { taskName } = this.state;
                        let newTask = {
                            id: Date.now(),
                            name: taskName,
                            completed: false,
                        };

                        this.props.dispatch(addNewTask(newTask));
                    }}><i className='fa fa-plus'></i> Add Task</Button>

                    <Button className="ml-2" disabled={this.state.disabled}
                        onClick={() => {
                            let {taskName} = this.state;
                            this.setState({
                                disabled: true,
                                taskName: '',
                            }, () => { this.props.dispatch(updateTask(taskName)); })
                        }}>
                        <i className='fa fa-upload'></i> Update Task
                    </Button>

                    <hr />
                    <Heading3>Task To Do</Heading3>
                    <Table>
                        <Thead>
                            {this.renderTaskToDo()}
                        </Thead>
                    </Table>
                    <Heading3>Task Completed</Heading3>
                    <Table>
                        <Thead>
                            {this.renderTaskCompleted()}
                        </Thead>
                    </Table>
                </Container>
            </ThemeProvider>
        )
    }

    // Đây là lifecycle trả về props cũ và state cũ
    // chạy sau khi render
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
            this.setState(
                {
                    taskName: this.props.taskEdit.name,
                }
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        theme: state.ToDoListReducer.theme,
        taskList: state.ToDoListReducer.taskList,
        taskEdit: state.ToDoListReducer.taskEdit,
    }
}

export default connect(mapStateToProps)(ToDoList)
