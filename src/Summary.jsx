import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Summary = () => {
    const tasks = useSelector((state) => state.Todos.task)
    const comptasks = tasks.filter((item) => item.completed)
    const diff = tasks.length - comptasks.length;
    const up = "Keep up the good work! :)"

    const history = useNavigate()

    return (
        <>
            <h1> You Have Created {tasks.length } Tasks!</h1>
            {tasks.length ? <h2> Furthermore, you have completed {comptasks.length} out of the {tasks.length }!</h2> : <br></br>}
            {
                !diff ? <h2>Congrats! No more Work!! :DD</h2> : diff === tasks.length ? <h2> You can do this! Pick up the pace!! </h2> : <h2> {up} </h2>
            }
            <button onClick={() => history('/todo')}>
                {diff ? "Back to Work" : "Add more Tasks"}
            </button>

            <button style={{margin: "10px"}} onClick={() => {
                localStorage.removeItem("persist:root")
                window.location.reload();
                }}>
                Crush State
            </button>
        </>
    )
}

export default Summary