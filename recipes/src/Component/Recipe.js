import React from 'react'
import "tailwindcss/tailwind.css"

export default function Recipe(props) {

  return (
   <div class="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-9 overflow-hidden relative">
    <div class="w-full max-w-3xl rounded bg-gray-300 shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-center">
        <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div class="relative">
                    <img src={props.photoUrl} class="w-full relative z-15 " alt=""/>
                    <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-15"></div>
                </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
                <div class="mb-10">
                    <h1 class="font-bold uppercase text-2xl mb-5">{props.title}</h1>
                </div>
                <div>
                    <div class="inline-block align-bottom mr-5">
                        <div class="text-2xl leading-none align-baseline" style={{}}>Ingredients</div>
                        <br></br>
                        <p class="text-sm">{props.ingredients}</p>
                        <br></br>
                        <span class="text-1xl leading-none align-baseline">Serving: {props.yield}</span>
                       <br></br>
                        <span class="text-1xl leading-none align-baseline">Calories: {props.calories} </span>
                        <br></br>
                       <br></br>
                    </div>
                    <div class="inline-flex">
                    <a href={props.url} >
                        <button class="mr-3 uppercase p-3 flex items-center bg-blue-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 hover:bg-blue-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 ">
			        	<svg width="32" height="32"  viewBox="0 0 32 32" ><path d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9z" fill="currentColor"></path></svg>
			            </button></a>
                        <button onClick={() => props.editView(props.id) } class="mr-3 uppercase p-3 flex items-center bg-yellow-500 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 hover:bg-yellow-500 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
				<svg width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" ><path d="M26 18A10 10 0 1 1 16 8h6.182l-3.584 3.585L20 13l6-6l-6-6l-1.402 1.414L22.185 6H16a12 12 0 1 0 12 12z" fill="currentColor"></path></svg>
				</button>
                        <button onClick={() => props.deleteRecipe(props.id)} class="uppercase p-3 flex items-center bg-red-500 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 hover:bg-red-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
		          	<svg width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" ><path d="M12 12h2v12h-2z" fill="currentColor"></path><path d="M18 12h2v12h-2z" fill="currentColor"></path><path d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z" fill="currentColor"></path><path d="M12 2h8v2h-8z" fill="currentColor"></path></svg>
					</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
                  
              






  )
}