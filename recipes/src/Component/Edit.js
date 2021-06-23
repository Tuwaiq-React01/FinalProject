import React from 'react'

export default function Edit(props) {
    const [newRecipe, setNewRecipe] = React.useState(props.recipe)

    const handleChange = (event) => {

        const att = event.target.name;
        const newValue = event.target.value;
        const updateRecipe = { ...newRecipe }
        updateRecipe[att] = newValue
        console.log("updateRecipe", updateRecipe);
        setNewRecipe(updateRecipe);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.editRecipe(newRecipe, props.recipe.id);
    }
        return (
            <form onSubmit={handleSubmit} >
    <div class="w-full h-screen flex ">
   

    <img src={newRecipe.photoUrl} alt="background" class="object-cover object-center h-screen w-6/12 shadow-lg"/>
    <div class="bg-gray-800 bg-opacity-25 rounded shadow-xl flex flex-col justify-center items-center w-5/12 ml-9 ">
      <h1 class="text-3xl font-bold text-orange-500 mb-2">Update Recipe</h1>
      <div class="w-1/2 text-center">
        <label class="block text-sm text-gray-900">Title</label>
        <input type="text" name="title" value={newRecipe.title} onChange={handleChange}
            class="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"/>
        <label class="block text-sm text-gray-900">Calories</label>
        <input type="text" name="calories" value={newRecipe.calories} onChange={handleChange}
            class="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"/>
            <label class="block text-sm text-gray-900">Ingredients</label>
        <input type="text" name="ingredients" value={newRecipe.ingredients} onChange={handleChange}
            class="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"/>
            <label class="block text-sm text-gray-900">Website</label>
        <input type="text" name="url" value={newRecipe.url} onChange={handleChange}
            class="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"/>
            <label class="block text-sm text-gray-900">Image</label>
        <input type="text" name="photoUrl" value={newRecipe.photoUrl} onChange={handleChange}
            class="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"/>
        <button type="submit"class="uppercase px-8 py-2 rounded-full bg-green-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg">Update</button>

      </div>
  </div>
  

            </div>
            </form>
        )
    }

