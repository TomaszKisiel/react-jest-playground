import React, {useEffect, useState} from "react"
import IRecipe from "../../interfaces/IRecipe"

enum FetchState {
    FETCHING,
    SUCCESS,
    FAILED,
    CANCEL
}


const Recipes = () => {
    const [recipes, setRecipes] = useState<Array<IRecipe>>([])
    const [fetchState, setFetchState] = useState<FetchState>(FetchState.FETCHING)

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch("/api/recipes")

            if ( response.ok ) {
                const json = await response.json()
                setRecipes( json.recipes )
                setFetchState(FetchState.SUCCESS)
            } else {
                setFetchState(FetchState.FAILED)
            }
        }
        fetchRecipes()

        return () => {
            setRecipes([])
            setFetchState(FetchState.FAILED)
        }
    }, [])

    return (
        <div>
            <h1>Recipes Finder</h1>
            <form>
                <input type="text" placeholder="Enter an ingredient to find recipes..."/>
                <button type="submit">Find</button>
            </form>
            { fetchState === FetchState.SUCCESS && recipes && recipes.map(recipe =>
                <li key={recipe.id}>{recipe.title}</li>
            )}
            { fetchState === FetchState.FAILED && (
                <p>Failed to fetch recipes.</p>
            )}
        </div>
    )
}

export default Recipes
