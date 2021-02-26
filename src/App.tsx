import React, {useReducer} from "react"
import './styles/app.scss'

import Header from "./components/header/Header"
import Nav from "./components/navigation/Nav"
import List from "./components/tasks/List"
import Footer from "./components/footer/Footer"

import {initialTasks} from "./reducers/tasks/initial"
import {reducer as tasksReducer} from "./reducers/tasks/reducer"
import TasksContext from "./contexts/TasksContext"


function App() {
    const [state, dispatch] = useReducer(tasksReducer, initialTasks)

    return (
        <TasksContext.Provider value={{state, dispatch}}>
            <div className="app">
                <Header/>
                <Nav/>
                <List/>
                <Footer/>
            </div>
        </TasksContext.Provider>
    )
}

export default App
