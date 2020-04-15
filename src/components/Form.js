import React from "react"
import { Context } from "../context/Context"


const Form = () => {


  const [title, setTitle] = React.useState("")

  const { addTask, clearList, editItem, editTask } = React.useContext(Context)


  const handleChange = e => {

    setTitle(e.target.value);

  }

  const handleSubmit = e => {

    e.preventDefault();

    if (!editItem) {
      addTask(title)
      setTitle("")
    } else {
      editTask(title, editItem.id)
    }

  }



  React.useEffect(() => {


    if (editItem) {

      setTitle(editItem.title)

    } else {
      setTitle("");
    }


  }, [editItem]);


  return (

    <form className="form" onSubmit={handleSubmit}>
      <input
        value={title}
        type="text"
        className="task-input"
        onChange={handleChange}
        placeholder="Take a note..."
        required
      />
      <div className="button-wrapper">
      <button
       className="add-button"
       type="submit">
        {editItem ? <span aria-label="none" alt="update" role="img">✍🏻</span> : "+"}
      </button>

      <button className="clear-button" onClick={clearList}><span aria-label="noneq" role="img">🗑️</span></button>
      
    </div>
    </form>
  );
}
export default Form


