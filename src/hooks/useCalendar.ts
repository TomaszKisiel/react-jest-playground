import {useReducer} from "react"
import {initialTasks} from "../reducers/tasks/initial"

type State = {
    year: number,
    month: number,
    day: number,
    hours: number,
    minutes: number,
    seconds: number
}

enum ActionTypes {
    UPDATE_DATE
}

type Action =
    { type: ActionTypes.UPDATE_DATE, date: object }

const updateDate = (date: object): Action => ({type: ActionTypes.UPDATE_DATE, date})

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionTypes.UPDATE_DATE:
            return {
                ...state,
                ...action.date
            }
        default:
            return state
    }
}

const initialState: State = {
    day: 0, hours: 0, minutes: 0, month: 0, seconds: 0, year: 0
}

const useCalendar = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const leadingZero = ( num:number ) => ( "0" + num ).slice(-2)

    const setYear = (year: number) => dispatch(updateDate({year}))
    const setMonth = (month: number) => dispatch(updateDate({month}))
    const setDay = (day: number) => dispatch(updateDate({day}))
    const setHours = (hours: number) => {
        if(hours < 0 || hours >= 24) {
            throw new RangeError("Hours should be within range from 0 to 24!")
        }

        dispatch(updateDate({hours}))
    }
    const setMinutes = (minutes: number) => dispatch(updateDate({minutes}))
    const setSeconds = (seconds: number) => dispatch(updateDate({seconds}))
    const getYear = () => state.year
    const getMonth = () => state.month
    const getDay = () => state.day
    const getHours = () => state.hours
    const getMinutes = () => state.minutes
    const getSeconds = () => state.seconds
    const getFullDate = () => state.year + "-" + leadingZero( state.month ) + "-" + leadingZero( state.day ) + " " + leadingZero( state.hours ) + ":" + leadingZero( state.minutes ) + ":" + leadingZero( state.seconds )

    return {
        setYear,
        setMonth,
        setDay,
        setHours,
        setMinutes,
        setSeconds,
        getYear,
        getMonth,
        getDay,
        getHours,
        getMinutes,
        getSeconds,
        getFullDate
    }
}

export default useCalendar
