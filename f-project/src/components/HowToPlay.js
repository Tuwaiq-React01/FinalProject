import React from 'react'
import ReactPlayer from 'react-player'

export default function HowToPlay() {
    return (
        <div>
            <div>
                <h1>Brief Explanation on How to Play The Game</h1>
                <ReactPlayer url='https://www.youtube.com/watch?v=FY5N0zbQNY8'/>
            </div>
            <div>
                <h1>Yugioh! diffrent styles of game</h1>
                <ReactPlayer url='https://www.youtube.com/watch?v=1SvVjAd0G1c'/>
            </div>
        </div>
    )
}
