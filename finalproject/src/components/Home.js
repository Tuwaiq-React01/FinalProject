import React from 'react'
import ComicsList from './ComicsList'



export default function Home(props) {
    return (
        <div>
            <br></br>
            <br></br>
            <ComicsList comics={props.comics} setSelectedMovie={props.setSelectedComic}/>
        </div>
    )
}