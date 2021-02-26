import { render, screen } from "@testing-library/react"
import React from "react"
import Header from "./Header"

it("render app header", () => {
    render(<Header/>)
    const header = screen.getByText("todo list", {exact: false})
    expect(header).toBeInTheDocument()
})
