import ITask from "../../interfaces/ITask";

export enum ActionTypes {
    INSERT_TASK,
    FLAG_DONE_TASK,
    DESTROY_TASK,
    CHANGE_FILTER,
    CHANGE_NOT_DONE_ONLY
}

export type State = {
    tasks: Array<ITask>,
    filter: string,
    notDoneOnly: boolean
}

export type Action =
    { type: ActionTypes.INSERT_TASK, task: ITask } |
    { type: ActionTypes.FLAG_DONE_TASK, task: ITask } |
    { type: ActionTypes.DESTROY_TASK, task: ITask } |
    { type: ActionTypes.CHANGE_FILTER, filter: string } |
    { type: ActionTypes.CHANGE_NOT_DONE_ONLY, notDoneOnly: boolean }

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionTypes.INSERT_TASK: {
            const { task } = action

            const tasks: Array<ITask> = state.tasks
            tasks.unshift( task )


            return {
                ...state,
                tasks: tasks
            }
        }
        case ActionTypes.FLAG_DONE_TASK: {
            const { task } = action

            const tasks: Array<ITask> = state.tasks.map( prevTask => {
                if ( prevTask == task ) {
                    return { ...task, done: true }
                }

                return prevTask
            })

            return {
                ...state,
                tasks: tasks
            }
        }
        case ActionTypes.DESTROY_TASK: {
            const { task } = action

            return {
                ...state,
                tasks: state.tasks.filter( prevTask => prevTask !== task )
            }
        }
        case ActionTypes.CHANGE_FILTER: {
            const { filter } = action

            return {
                ...state,
                filter: filter
            }
        }
        case ActionTypes.CHANGE_NOT_DONE_ONLY: {
            const { notDoneOnly } = action

            return {
                ...state,
                notDoneOnly: notDoneOnly
            }
        }
        default:
            return state
    }
}
