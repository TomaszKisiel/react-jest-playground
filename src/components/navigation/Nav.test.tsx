import React from "react"
import Nav from "./Nav"
import {render, screen} from "@testing-library/react"

const prepareNavigation = () => {
    render(<Nav/>)
}

describe("navigation", () => {
    it("render app navigation", () => {
        prepareNavigation()
        const nav = screen.getByRole("navigation")
        expect(nav).toBeInTheDocument()
    });

    it("navigation has task adding panel", () => {
        prepareNavigation()
        const name = screen.getByLabelText("name", {exact: false})
        const description = screen.getByLabelText("name", {exact: false})
        const addButton = screen.getByRole("button")

        expect(name).toBeInTheDocument()
        expect(description).toBeInTheDocument()
        expect(addButton).toBeInTheDocument()
    })

    it("task adding panel name empty on start", () => {
        prepareNavigation()
        const name = screen.getByLabelText("name", {exact: false})

        expect(name.innerHTML).toBe("")
    })

    it("task adding panel description empty on start", () => {
        prepareNavigation()

        const description = screen.getByLabelText("description", {exact: false})
        expect(description.innerHTML).toBe("")
    })
})
