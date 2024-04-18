import { React, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, EditTask, MurderTask, ToggleTask } from './Redux/Todo'
import { useNavigate } from 'react-router-dom'

const Todo = () => {

    const [input, setinput] = useState('')
    const [check_edit, setedit] = useState(null);
    const history = useNavigate()
    const task = (useSelector((state) => state.Todos.task));
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)

    console.log(task);
    const create = (e) => {
        e.preventDefault();
        const trimmedInput = input.trim();
        if (trimmedInput === '') {
            setinput('');
            return;
        }
        if (!check_edit) {
            setinput('');
            dispatch(addTask(trimmedInput))
        } else {
            console.log("JHEH ", check_edit);
            if (trimmedInput === '') {
                setinput('');
                return;
            }
            //dispatch(EditTask(check_edit, trimmedInput))
            dispatch(EditTask({ check_edit, trimmedInput }))
            setedit(null);
            setinput('');
        }
    };

    const edit = (id) => {
        const taskToEdit = task.find((task) => task.id === id);
        if (taskToEdit) {
            setinput(taskToEdit.title);
            setedit(id)
        }
    };

    return (
        <>
            <form onSubmit={create}>

                <h2> Create a New ToDo Task </h2>
                <label>Add Task </label>
                <input type='text' placeholder='anything here' value={input} style={{ height: "30px", marginRight: "10px" }} onChange={(e) => setinput(e.target.value)}></input>
                <button type='submit'>
                    click me
                </button>
                <br />
                <button onClick={() => { history('/summary') }} style={{ marginTop: "15px" }}>
                    Show Summary
                </button>
            </form>
            <h1 style={{ textAlign: "left", position: "relative", right: "150px", marginTop: "50px" }}> To Do List: </h1>
            <ul>
                {task.map((item) => {
                    return (
                        <li key={item.id} style={{ marginTop: "30px" }}>
                            <label style={{ fontFamily: "sans-serif", fontSize: "20px", marginRight: "15px" }}> {item.title}</label>
                            <input type="checkbox" checked={item.completed} onChange={() => dispatch(ToggleTask(item.id))} />
                            <button onClick={() => dispatch(MurderTask(item.id))} style={{ backgroundColor: "crimson", marginLeft: "10px" }}> Delete</button>
                            <button onClick={() => edit(item.id)} style={{ backgroundColor: "orange", marginLeft: "10px" }}> Edit </button>
                        </li>
                    )
                })}
            </ul>
            <div style={{ marginTop: "40px" }}>
                <h4> Btw your count was {count}</h4>
                <button onClick={() => { history('/') }} style={{ marginTop: "15px" }}>
                    Update it?
                </button>
            </div>
        </>
    )
}

export default Todo

