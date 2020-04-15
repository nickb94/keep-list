import React from "react"
import { Context } from "../context/Context"


const Task = ({ task }) => {

    const { removeTask, findItem } = React.useContext(Context)

    return (
        <li className="task">
            <div className="title">
            <span>{task.title}</span>
            </div>
            <div className="actions">
            <button onClick={() => removeTask(task.id)}><span alt="delete task" aria-label="update" role="img">🚫</span></button>{""}
            <button onClick={() => findItem(task.id)}><span aria-label="update" alt="update task" role="img">📝</span></button>
            </div>
        </li>
    );
}

export default Task