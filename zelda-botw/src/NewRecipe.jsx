import axios from 'axios';
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

const NewRecipe = () => {
    const [recipe, setRecipe] = useState({});
    const [ingredients, setIngredients] = useState({});
    const history= useHistory();
    const HandleSubmit = (e) => {
        e.preventDefault()
        recipe["ingredients"] = [[ingredients]]
        axios.post('http://localhost:3000/recipes', recipe)
            .then(res => history.push('/recipes'))
            .then(err => console.log(err))
    }
    const HandleChange = (name, e) => {
        setRecipe({ ...recipe, [name]: e.target.value })
    }

    const HandleIngredient = (name, e) => {
        setIngredients({ ...ingredients, [name]: e.target.value })
    }
    return (

        <div class="two column stackable ui centered grid" style={{ margin: "0px 20px" }} >
            <div class="column">
                <div class="ui inverted segment">
                    <div class="ui inverted form">
                        <div class="two fields">
                            <div class=" field">
                                <label>Recipe name</label>
                                <input type="text" placeholder="Name" name="recipe_name" onChange={(e)=>HandleChange(e.target.name,e)} />
                            </div>
                            <div class=" field">
                                <label>Recipe Image</label>
                                <input type="text" placeholder="Image URL" name="recipe_image" onChange={(e)=>HandleChange(e.target.name,e)} />
                            </div>
                        </div>
                        <div class="two fields">
                            <div class=" field">
                                <label>Healling ❤</label>
                                <input type="text" placeholder="❤❤❤❤" name="healing" onChange={(e)=>HandleChange(e.target.name,e)}/>
                            </div>
                            <div class=" field">
                                <label>Effect</label>
                                <input type="text" placeholder="Effect" name="effect" onChange={(e)=>HandleChange(e.target.name,e)} />
                            </div>
                        </div>
                        <div class="two fields">
                            <div class=" field">
                                <label>Ingredient name </label>
                                <input type="text" placeholder="Ingredient name " name="name" onChange={(e)=>HandleIngredient(e.target.name,e)}/>
                            </div>
                            <div class=" field">
                                <label>Ingredient image</label>
                                <input type="text" placeholder="Image URL" name="image" onChange={(e)=>HandleIngredient(e.target.name,e)} />
                            </div>
                        </div>

                        <button class="ui labled icon button" id="add_button" onClick={(e) => HandleSubmit(e)}>
                            <i class="utensils icon"></i>
                            <span> </span>Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewRecipe;
