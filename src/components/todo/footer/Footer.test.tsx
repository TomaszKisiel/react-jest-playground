import { render, screen } from "@testing-library/react"
import React from "react"
import Footer from "./Footer"

it("render app header", () => {
    render(<Footer/>)
    const footer = screen.getByText("orgella", {exact: false})
    expect(footer).toBeInTheDocument()
})
