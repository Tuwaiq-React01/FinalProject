import React, {useEffect} from 'react'
import useSound from 'use-sound'

export default function Photo() {
    const [playSound] = useSound(
        '../../sounds/ng.mp3',
        { volume: 0.03 }
    );

    return (
        <div className="m-auto" onMouseOver={playSound}>
            <img className="transform scale-125" src="https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif" />
        </div>
    )
}
