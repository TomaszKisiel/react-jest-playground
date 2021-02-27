import React, {useContext, useState} from "react"
import TasksContext from "../../../contexts/TasksContext"
import ITask from "../../../interfaces/ITask"
import {insertTask} from "../../../reducers/tasks/actions"

type NavProps = {

}

const Nav = ({}: NavProps) => {
    const { dispatch } = useContext(TasksContext)
    const [ newTask, setNewTask ] = useState<ITask>({name: "", description: "", done: false })

    return (
        <nav className="nav">
            <div className="nav__control">
                <label htmlFor="task-name">Name</label>
                <input
                    id="task-name"
                    className="nav__input"
                    type="text"
                    value={ newTask.name }
                    onChange={ e => setNewTask({ ...newTask, name: e.target.value })}
                    placeholder="np. zrobić zakupy"/>
            </div>
            <div className="nav__control">
                <label htmlFor="task-desc">Description</label>
                <input
                    id="task-desc"
                    className="nav__input"
                    type="text"
                    value={ newTask.description }
                    onChange={ e => setNewTask({ ...newTask, description: e.target.value })}
                    placeholder="np. kupić jabłka, gruszki.."/>
            </div>
            <div className="nav__fill"/>
            <button
                className="nav__button"
                onClick={ () => {
                    if ( newTask.name || newTask.description ) {
                        dispatch(insertTask(newTask))
                        setNewTask({name: "", description: "", done: false})
                    }
                }}>
                Add task
            </button>
        </nav>
    )
}

export default Nav
