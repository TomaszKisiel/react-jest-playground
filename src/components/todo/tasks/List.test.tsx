import React from "react"
import {render, screen} from "@testing-library/react"
import List from "./List"

describe("<List/>", () => {
    it("render list component", () => {
        render(<List/>)
        const element = screen.getByText("brak zadań", {exact: false})
        expect(element).toBeInTheDocument()
    })

    it("list component contains tasks", () => {

    })
})

