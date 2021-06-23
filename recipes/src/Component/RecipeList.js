import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Recipe from './Recipe'
import Edit from './Edit'

export default function RecipeList() {
    const [recipes, setRecipes] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [clickedRecipeId, setClickedRecipeId] = useState("")


    useEffect(() => {
        getRecipe()
             
    }, [])
 
    const getRecipe = () => {
        axios.get("https://api.sampleapis.com/recipes/recipes")
            .then((response) => {
                console.log("get", response.data)
                setRecipes(response.data)
            }).catch((err) => {
                console.log("error", err);
            })
    }
    const editView = (id) => {
        setIsEdit(!isEdit)
        setClickedRecipeId(id)

    }
    const editRecipe = (recipe,id) => {
        axios.put(`https://api.sampleapis.com/recipes/recipes/${recipe.id}`, recipe)
            .then((res) => { 
                // console.log("the id", id);    
                const updatedRecipesList = [...recipes];
                const index = updatedRecipesList.findIndex(mov => mov.id === id);
                if (index !== -1) {
                    updatedRecipesList.push(recipe)
                    updatedRecipesList.splice(index, 1);
                    setRecipes(updatedRecipesList);
                   // window.location.reload();

                }
            }).catch((err) => {
                console.log("error", err);
            })
    }
    const deleteRecipe = (id) => {
        axios.delete(`https://api.sampleapis.com/recipes/recipes/${id}`)
            .then((res) => {
                const updatedRecipesList = [...recipes];
                const index = updatedRecipesList.findIndex(mov => mov.id === id);
                if (index !== -1) {
                    updatedRecipesList.splice(index, 1);
                    setRecipes(updatedRecipesList);
                }
                console.log("delete", res);
            }).catch((err) => {
                console.log("error", err);
            })
    }

    return (
        <div>
            <ul>
            {recipes.map((recipe, index) => <div key={index}>
               
               <Recipe 
               name={recipe.title}
               id={recipe.id}
               image={recipe.photoUrl}
               calories={recipe.calories}
               ingredients={recipe.ingredients}
               yield={recipe.yield}
               url={recipe.url}

               {...recipe} editView={editView} deleteRecipe={deleteRecipe} />
             
               {isEdit && clickedRecipeId === recipe.id ?

              <Edit recipe={recipe} editRecipe={editRecipe}></Edit>
         
               : null}
             
                </div>
                
                )}
            </ul>

        </div>
    )
}