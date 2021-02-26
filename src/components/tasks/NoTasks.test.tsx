import React from "react"
import NoTasks from "./NoTasks"
import {render, screen} from "@testing-library/react"

it("render no task component", () => {
    render(<NoTasks/>)
    const element = screen.getByText( "brak zadań",{ exact: false})
    expect(element).toBeInTheDocument()
});
