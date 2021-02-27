import React from "react"
import Task from "./Task"
import {render, screen} from "@testing-library/react"
import fireEvent from "@testing-library/user-event"
import ITask from "../../../interfaces/ITask"

const onDoneMock = jest.fn()
const onDestroyMock = jest.fn()

const prepareTask = (properties: object = {}) => {
    const task: ITask = {
        name: "Test",
        description: "Zadanie do celów testowych",
        done: false,
        ...properties
    }

    render(<Task {...task} onDestroy={onDestroyMock} onDone={onDoneMock}/>)
    const element = screen.getByRole("article")

    return {element, task}
}

describe("<Task/>", () => {
    it("render task component", () => {
        const {element} = prepareTask()
        expect(element).toBeInTheDocument()
    })

    it("task component has correct name", () => {
        const {task} = prepareTask()
        const name = screen.getByText(task.name)

        expect(name).not.toBeNull()
        expect(name.innerHTML).toBe(task.name)
    })

    it("task component has correct description", () => {
        const {task} = prepareTask()
        const description = screen.getByText(task.description)

        expect(description).not.toBeNull()
        expect(description.innerHTML).toBe(task.description)
    })

    it("task component call onDone function when done button press", () => {
        prepareTask()
        const done = screen.getByText("zrobione", {exact: false})

        fireEvent.click(done)
        expect(onDoneMock).toBeCalledTimes(1)
    })

    it("task component call onDestroy function when destroy button press", () => {
        prepareTask()
        const destroy = screen.getByText("usuń", {exact: false})

        fireEvent.click(destroy)
        expect(onDestroyMock).toBeCalledTimes(1)
    })

    it("task line-through when is done", () => {
        const { element } = prepareTask({ done: true })
        expect( element.className ).toContain("task--done")
    })
})
