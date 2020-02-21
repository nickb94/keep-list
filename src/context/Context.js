import React, { createContext } from "react"

export const Context = createContext();

export const Provider = (props) => {

    const [tasks, setTasks] = React.useState([
       
    ])

    const [editItem, setEditItem] = React.useState(null);

    const addTask = (title) => {

        setTasks([
            ...tasks,
            { title, id: Math.random() }
        ])

    }

    const removeTask = (id) => {

        setTasks(tasks.filter(task => task.id !== id))

    }

    const clearList = () => {

        setTasks([])
    }


    const findItem = (id) => {

        const item = tasks.find(task => task.id === id)

        console.log(item);

        setEditItem(item)

    }


    const editTask = (title, id) => {

        const newTask = tasks.map(task => (task.id === id) ? { title, id } : task)

        console.log(newTask)
        setTasks(newTask);
        setEditItem("")
    }


    return (
        <div>
            <Context.Provider value={{ 
                tasks, 
                addTask, 
                removeTask, 
                clearList, 
                findItem, 
                editTask, 
                editItem }}
                >
                {props.children}
            </Context.Provider>
        </div >
    );
}




