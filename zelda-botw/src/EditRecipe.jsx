import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const EditRecipe = () => {
    const [recipe, setRecipe] = useState(null);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:3000/recipes/${id}`).then(res => {
            setRecipe(res.data)
        }).catch(err => console.log(err))
    }, []);

    const HandleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:3000/recipes/${id}`, recipe)
            .then(res => history.push('/recipes'))
            .then(err => console.log(err))
    }
    const HandleChange = (name, e) => {
        setRecipe({ ...recipe, [name]: e.target.value })
    }

    return (

        <div class="two column stackable ui centered grid" style={{ margin: "0px 20px" }} >
            <div class="column">
                <div class="ui inverted segment">
                    <div class="ui inverted form">
                        {recipe ?
                            (
                                <>
                                    <div class="two fields">
                                        <div class=" field">
                                            <label>Recipe name</label>
                                            <input type="text" placeholder="Name" name="recipe_name" 
                                             onChange={(e) => HandleChange(e.target.name, e)} />
                                        </div>
                                        <div class=" field">
                                            <label>Recipe Image</label>
                                            <input type="text" placeholder="Image URL" name="recipe_image" value={recipe.recipe_image} onChange={(e) => HandleChange(e.target.name, e)} />
                                        </div>
                                    </div>
                                    <div class="two fields">
                                        <div class=" field">
                                            <label>Healling ❤</label>
                                            <input type="text" placeholder="❤❤❤❤" name="healing" value={recipe.healing} onChange={(e) => HandleChange(e.target.name, e)} />
                                        </div>
                                        <div class=" field">
                                            <label>Effect</label>
                                            <input type="text" placeholder="Effect" name="effect" value={recipe.effect} onChange={(e) => HandleChange(e.target.name, e)} />
                                        </div>
                                    </div>
                                </>
                            )
                            :
                            (<div class="ui active dimmer">
                                <div class="ui indeterminate text loader">Preparing Files</div>
                            </div>)
                        }

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

export default EditRecipe;
