import axios from 'axios'
import React, { useState } from 'react'
import {useHistory} from "react-router-dom";

export default function Add() {
    const history = useHistory({ forceRefresh: true });
    const [recipes, setRecipes] = useState([])
    const [newRecipe, setNewRecipe] = React.useState({})
    const handleChange = (event) => {
        const att = event.target.name;
        const newValue = event.target.value;
        const updateRecipe = { ...newRecipe }
        updateRecipe[att] = newValue
        console.log("updateRecipe", updateRecipe);
        setNewRecipe(updateRecipe)

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        addRecipe(newRecipe);
        history.push('/RecipeList')
        
       
    }
    const addRecipe = (recipe) => {
        axios.post("https://api.sampleapis.com/recipes/recipes", recipe)
            .then(res => {
                console.log("post", res);
                 const updateRecipeList = [...recipes]
                 updateRecipeList.push(res.data)
                 setRecipes(updateRecipeList);
                window.location.reload();


            }).catch((err) => {
                console.log("error", err);
            })        
    }

 
    return (
    
        <div class="h-screen font-sans login bg-cover">
            <div class="container mx-auto h-full flex flex-1 justify-center items-center">
                <div class="w-full max-w-lg">
                    <div class="leading-loose">
                        <form onSubmit={handleSubmit} class="max-w-sm m-10 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                            <p class="text-gray-900 font-medium text-center text-lg font-bold">Add Recipe</p>
                            <div class="">
                                <label class="block text-sm text-gray-900">Title of Recipe</label>
                                <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" name="title" type="text" onChange={handleChange} />
                            </div>
                            <div class="">
                                <label class="block text-sm text-gray-900">Ingredients</label>
                                <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" name="ingredients" type="text" onChange={handleChange} />
                            </div>
                            <div class="">
                                <label class="block text-sm text-gray-900">Calories</label>
                                <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" name="calories" type="text" onChange={handleChange} />
                            </div>
                            <div class="">
                                <label class="block text-sm text-gray-900">Website</label>
                                <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" name="url" type="text" onChange={handleChange} />
                            </div>
                            <div class="">
                                <label class="block text-sm text-gray-900">Image</label>
                                <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" name="photoUrl" type="text" onChange={handleChange} />
                            </div>
                            <div class="mt-4 justify-between text-center">
                            <button class="px-4 py-1 text-center text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded " type="submit">Add</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    )

}
