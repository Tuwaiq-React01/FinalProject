import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ShowRecipe = () => {
    const [recipe, setRecipe] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/recipes/${id}`).then(res => {
            setRecipe(res.data)
        }).catch(err => console.log(err))
    }, []);
    const deleteRecipe = (e, id) => {
        e.preventDefault()
        axios.delete(`http://localhost:3000/recipes/${id}`).then(res => {

        })
    }
    return (
        <>{recipe ?
            (
                <div class="two column stackable ui centered grid" >
                    <div class="center middle aligned column">
                        <div class="ui segment" style={{ backgroundColor: "#bf1313", color: "white" }}>
                            <h1>{recipe.recipe_name}

                                <span style={{ color: "white", backgroundColor: "#1b1c1d", padding: "6px", marginLeft: "90px", borderRadius: "3px", fontSize: "0.9em" }}>{recipe.healing}</span>
                            </h1>
                        </div>
                        <div class="ui segment" style={{ backgroundColor: "#1b1c1d", color: "white", fontSize: "1.2em" }}>
                            <div class="two column stackable centered ui grid" style={{ marginBottom: "8px" }}>
                                <div class="center middle aligned column ui ">

                                    <img class="ui centered small image" src={recipe.recipe_image} alt={recipe.recipe_name} />
                                </div>
                                <div class="ui column center middle aligned  ">
                                    <p style={{ padding: "5px", borderRadius: "3px", fontSize: "1.3em" }}> {recipe.effect}</p>
                                    
                                </div>
                                {recipe.ingredients.map(ingredient => {
                                    return (
                                        <div class="ui segment"style={{margin:"20px", color:"#1b1c1d"}}>
                                        
                                        <img class="ui tiny image" src={ingredient[0].image}>
                                        </img>
                                        <span>{ingredient[0].name}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>
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

export default ShowRecipe;
