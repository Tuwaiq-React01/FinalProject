import React from 'react'
export default function SearchArea(props) {
    return (
        <div className="text-center " >
        <form  onSubmit={props.handleData}>
            <input className="search-area" onChange={props.handleSearch}></input>
            <button className="btn btn-outline-light search-area ml-2   " style={{borderRadius:" 3rem 3rem 3rem 3rem " ,width:"8rem"}} > SHOW</button>
        </form>
    </div>
    )
}
