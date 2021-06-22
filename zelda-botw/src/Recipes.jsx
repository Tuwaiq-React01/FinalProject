import './App.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/recipes')
            .then((res) => {
                setRecipes([res.data])
            })
            .catch(err => console.log(err))
    }, []);

    let recipeList
    if (recipes.length > 0) {
        recipeList = recipes[0].map((recipe, i) => {
            return (

                <div class="column" key={i}>
                    <div class="ui segment" style={{ backgroundColor: "#1b1c1d", color: "white", fontSize: "1.2em" }}>
                        <div class="two column stackable centered ui grid" style={{ marginBottom: "8px" }}>
                            <div class="center middle aligned column ui">

                                <span style={{ color: "#bf1313", backgroundColor: "white", padding: "5px", borderRadius: "3px", fontSize: "0.9em" }}>{recipe.healing}</span>
                                <br /><br />
                                <img class="ui centered tiny image " src={recipe.recipe_image} />


                            </div>
                            <div class="ui column center middle aligned  ">

                                <p style={{ padding: "5px", borderRadius: "3px", fontSize: "0.8em" }}> {recipe.effect}</p>
                            </div>
                            <button class="ui labled icon button" id="recipe_name">
                                <i class="utensils icon"></i>
                                <span> </span>{recipe.recipe_name}
                            </button>
                        </div>
                    </div>
                </div>

            )
        })
    }
    return (
        <>
            {recipes.length > 0 ?
                (
                    <>
                        <Link to="/recipes/new" class="ui teal labled icon button" style={{ marginLeft: "35px" }}>
                            <i class="plus icon"></i>
                            Add new recipe
                        </Link>
                        <div class="four column stackable ui centered grid" style={{ margin: "0px 20px" }} >
                            {recipeList}
                        </div>
                    </>
                )
                :
                (
                    <div class="ui active dimmer">
                        <div class="ui indeterminate text loader">Preparing Files</div>
                    </div>
                )
            }
        </>
    );
}

export default Recipes;
