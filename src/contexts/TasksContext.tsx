import React, {createContext} from "react"
import {Action as TasksAction, State as TasksState} from "../reducers/tasks/reducer"
import {initialTasks} from "../reducers/tasks/initial"

const TasksContext = createContext<{
    state: TasksState;
    dispatch: React.Dispatch<TasksAction>;
}>({
    state: initialTasks,
    dispatch: () => null
})

export default TasksContext
