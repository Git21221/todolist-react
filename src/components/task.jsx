import React from "react";
import "./css/task.css"
const Task = ({title, description, deletetask, index})=> {
  return (
    <div className="tasks">
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
        <button className="addButton deleteBtn" onClick={() =>{
          deletetask(index)
        }}>-</button>
    </div>
  )
}
export default Task;
