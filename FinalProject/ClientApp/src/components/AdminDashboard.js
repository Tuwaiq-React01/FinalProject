import React from 'react'

export default function AdminDashboard(props) {
    return (
        <div>

            
            
            {
           props.Celebrities.map((Celebrity,i)=>{
                return  <div className="row d-flex flex-row justify-content-between">


            <h4>{Celebrity.name}</h4>
            <div className="">
            <button id="mybtn" className="px-4 mx-2 " onClick={()=>props.handle_Edit_Data(Celebrity.id)} > Edit</button> 
            <button id="mybtn" className="px-4 mx-2 bg-danger" onClick={()=>props.handle_Delete_Data(Celebrity.id)} > Delete</button>      
            </div>
            
                </div>

              
            })
        }
        </div>
    )
}
