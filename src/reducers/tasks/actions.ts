import {Action, ActionTypes} from "./reducer";
import ITask from "../../interfaces/ITask"

export const insertTask = (task: ITask): Action => ({ type: ActionTypes.INSERT_TASK, task })
export const destroyTask = (task: ITask): Action => ({ type: ActionTypes.DESTROY_TASK, task })
export const flagDoneTask = (task: ITask): Action => ({ type: ActionTypes.FLAG_DONE_TASK, task })

export const changeFilter = (filter: string): Action => ({ type: ActionTypes.CHANGE_FILTER, filter })
export const changeNotDoneOnly = (notDoneOnly: boolean): Action => ({ type: ActionTypes.CHANGE_NOT_DONE_ONLY, notDoneOnly })
