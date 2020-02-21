import React from "react"
import { Context } from "../context/Context"


const Task = ({ task }) => {

    const { removeTask, findItem } = React.useContext(Context)

    return (
        <li className="task">
            <div className="title">
            <span>{task.title}</span>
            </div>
            <div>
            <button onClick={() => removeTask(task.id)}>Delete</button>{ ""}
            <button onClick={() => findItem(task.id)}>Update</button>
            </div>
        </li>
    );
}

export default Task