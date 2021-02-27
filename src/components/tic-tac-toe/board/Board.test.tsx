import React from "react"
import ReactDOM from "react-dom"
import { fireEvent } from "@testing-library/react"
import { getQueriesForElement } from "@testing-library/react"
import Board from "./Board"

it("render board component", () => {
    const root = document.createElement("div")
    ReactDOM.render( <Board/>, root )

    expect(root.getElementsByClassName("board")).toHaveLength(1)
})

it( "board has nine fields", () => {
    const root = document.createElement("div")
    ReactDOM.render( <Board/>, root )
    const fields = root.querySelectorAll( ".board > div")

    expect(fields ).toHaveLength(9)

})

it( "board has clickable fields", () => {
    const clickMock = jest.fn()

    const root = document.createElement("div")
    ReactDOM.render( <Board onFieldClick={ clickMock }/>, root )
    const fields = root.querySelectorAll( ".board > div")

    fireEvent.click( fields[0] )
    expect( clickMock ).toBeCalledTimes(1)
})
