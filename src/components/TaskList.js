import React, { useContext } from "react"
import { Context } from "../context/Context"
import Task from "./Task"


const TaskList = () => {

    const { tasks } = useContext(Context)

    return (
        <div className="wrapper-container">
            {tasks.length
                ?

                <ul  className="grid-wrapper">
                    {tasks.map(task => {
                      return <Task task={task} key={task.id} />
                    })}</ul>
                :
                (
                    <div className="empty-list-container">
                        <img className="empty-list-image" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNOSAyMWMwIC41NS40NSAxIDEgMWg0Yy41NSAwIDEtLjQ1IDEtMXYtMUg5djF6bTMtMTlDOC4xNCAyIDUgNS4xNCA1IDljMCAyLjM4IDEuMTkgNC40NyAzIDUuNzRWMTdjMCAuNTUuNDUgMSAxIDFoNmMuNTUgMCAxLS40NSAxLTF2LTIuMjZjMS44MS0xLjI3IDMtMy4zNiAzLTUuNzQgMC0zLjg2LTMuMTQtNy03LTd6bTIuODUgMTEuMWwtLjg1LjZWMTZoLTR2LTIuM2wtLjg1LS42QTQuOTk3IDQuOTk3IDAgMCAxIDcgOWMwLTIuNzYgMi4yNC01IDUtNXM1IDIuMjQgNSA1YzAgMS42My0uOCAzLjE2LTIuMTUgNC4xeiIvPgo8L3N2Zz4K" alt="empty list"></img>
                        <h1 className="empty-list-text">Notes you add appear here</h1></div>
                )}

        </div>
    );
};

export default TaskList