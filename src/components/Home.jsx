import { useState, useEffect } from "react"
import "./css/home.css"
import Task from "./task"
export default function Home() {
    const initialArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
    const submithandler = (e) => {
        e.preventDefault();
        setTasks([...tasks, {
            title: title,
            description: description
        }])
        setTitle(" ")
        setdescription(" ")
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
    const deletetask = (index) =>{
        const filteredArray = tasks.filter((val, i) => {
            return i !== index;
        })
        setTasks(filteredArray)
    }
    const [tasks, setTasks] = useState(initialArray);
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])
    
    return (
        <div className="container">
            <h1>Daily Goals</h1>
            <form onSubmit={submithandler}>
                <input type="text" className="taskName" placeholder="Task Name" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea className="description" placeholder="Description" value={description} onChange={(e) => setdescription(e.target.value)} ></textarea>
                <button className="addButton" type="submit">ADD</button>
            </form>
            {tasks.map((item, index) => (
                <Task 
                key={index}
                title={item.title}
                description={item.description}
                deletetask={deletetask}
                index={index}
                />
            ))}
        </div>
    )
}