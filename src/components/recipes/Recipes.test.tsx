import Recipes from "./Recipes"
import { render, screen, waitFor } from "@testing-library/react"
import React from "react"
import { setupServer } from "msw/node"
import { rest } from "msw"
import IRecipe from "../../interfaces/IRecipe"

const allRecipes: Array<IRecipe> = [
    { id: 1, title: "Burger" },
    { id: 2, title: "French toast" },
    { id: 3, title: "Salmon" },
]

const server = setupServer(
    rest.get("/api/recipes", ((req, res, context) => {
        return res( context.json( { recipes: allRecipes } ) )
    }))
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it("render recipes heading", () => {
    render(<Recipes/>)

    expect(screen.getByRole("heading")).toHaveTextContent("Recipes Finder")
})

it("render recipes search box", () => {
    render(<Recipes/>)

    expect(screen.getByPlaceholderText("Enter an ingredient to find recipes...")).toBeInTheDocument()
    expect( screen.getByRole("button")).toHaveTextContent("Find")
})

it("render recipes list", async () => {
    render(<Recipes/>)

    const listItems = await screen.findAllByRole("listitem")

    expect(listItems).toHaveLength(3)
    expect(listItems[0]).toHaveTextContent("Burger")
    expect(listItems[1]).toHaveTextContent("French toast")
    expect(listItems[2]).toHaveTextContent("Salmon")
})

it("render error message when fetch recipes failed", async() => {
    server.use(
        rest.get("/api/recipes", (req,res,context) => {
            return res(
                context.status(500),
                context.json({ msg: "Internal server error"})
            )
        })
    )

    render(<Recipes/>)

    expect(await screen.findByText("Failed to fetch recipes.")).toBeInTheDocument()
    expect( screen.queryByRole("listitem")).not.toBeInTheDocument()
})
