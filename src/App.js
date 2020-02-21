import React from "react"
import TaskList from "./components/TaskList"
import Form from "./components/Form"
import Header from  "./components/Header"
import "./App.css"

const App = () =>{

    return(

        <div>
            <Header />
            <div className="under-head">
            <Form />
            <TaskList />
            </div>
        </div>
    );
}


export default App