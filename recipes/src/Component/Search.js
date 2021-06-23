import axios from 'axios'
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Search() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');



  const getRecipe = () => {
    axios.get(`https://api.sampleapis.com/recipes/recipes?title=${search}`)
      .then((response) => {
        console.log("get", response.data)
        setData(response.data)
      }).catch((err) => {
        console.log("error", err);
      })
  }

  const list = data.map((m, i) => {
    return (
      <div class="bg-gray-700  mt-5 p-5 lg:p-4 overflow-hidden relative">
        <div class="p-5 max-w-2xl rounded bg-gray-300 shadow-xl  mx-auto text-gray-800 relative md:text-center">
          <div class="md:flex items-center -mx-2">
            <div class=" md:w-1/2 px-5 mb-10 md:mb-0">
              <div class="relative">
                <img src={m.photoUrl} class="w-full relative z-15 " alt="" />
                <div class="border-4 border-gray-700 absolute top-10 bottom-10 left-10 right-10 z-15"></div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
              <div class="mb-10">
                <h1 class="font-bold uppercase text-2xl mb-5">{m.title}</h1>
              </div>
              <div>
                <div class="inline-block align-bottom mr-5">
                  <div class="text-2xl leading-none align-baseline">Ingredients</div>
                  <br></br>
                  <p class="text-sm">{m.ingredients}</p>
                  <br></br>
                  <span class="text-1xl leading-none align-baseline">Serving: {m.yield}</span>
                  <br></br>
                  <span class="text-1xl leading-none align-baseline">Calories: {m.calories} </span>
                  <br></br>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    
    <div class="flex items-center justify-center bg-gray-800">
  <form >
    <div class="relative text-gray-600 focus-within:text-gray-400 mt-5 mb-5">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="button" class="p-1 focus:outline-none focus:shadow-outline">
              <svg fill="none" stroke="currentColor" onClick={getRecipe} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </span>
          <input type="search" onChange={(e) => setSearch(e.target.value)} class="py-2 text-sm text-black bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autocomplete="off" />
        </div>
      </form>
      <div className="row">
        {list}
      </div>
    </div>






  )
}