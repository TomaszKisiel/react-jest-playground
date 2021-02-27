import React, {useReducer} from "react"
import './styles/app.scss'
import './styles/tictactoe.scss'

import Header from "./components/todo/header/Header"
import Nav from "./components/todo/navigation/Nav"
import List from "./components/todo/tasks/List"
import Footer from "./components/todo/footer/Footer"

import {initialTasks} from "./reducers/tasks/initial"
import {reducer as tasksReducer} from "./reducers/tasks/reducer"
import TasksContext from "./contexts/TasksContext"
import RecipesPage from "./pages/RecipesPage"
import TicTacToePage from "./pages/TicTacToePage"

const TicTacToeApp = () => {
    return (
        <TicTacToePage/>
    )
}

// const RecipesApp = () => {
//     return (
//         <RecipesPage/>
//     )
// }

// function TasksApp() {
//     const [state, dispatch] = useReducer(tasksReducer, initialTasks)
//
//     return (
//         <TasksContext.Provider value={{state, dispatch}}>
//             <div className="app">
//                 <Header/>
//                 <Nav/>
//                 <List/>
//                 <Footer/>
//             </div>
//         </TasksContext.Provider>
//     )
// }

export default TicTacToeApp
