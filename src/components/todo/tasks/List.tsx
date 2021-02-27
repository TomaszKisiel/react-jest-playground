import React, {useContext} from "react"
import Task from "./Task"
import NoTasks from "./NoTasks"

import ITask from "../../../interfaces/ITask"
import TasksContext from "../../../contexts/TasksContext"
import {destroyTask, flagDoneTask} from "../../../reducers/tasks/actions"

type NavigationProps = {
    tasks?: Array<ITask>
}

const List = ({}: NavigationProps) => {
    const {state, dispatch} = useContext(TasksContext)

    return (
        <section className="list">
            {
                state.tasks.length
                    ? state.tasks.map((task, index) => (
                        <Task
                            key={ index }
                            onDone={ () => dispatch( flagDoneTask( task ))}
                            onDestroy={ () => dispatch( destroyTask(task ))}
                            {...task} />
                    ))
                    : <NoTasks/>
            }
        </section>
    )
}

export default List
