import React from 'react'
import Normal from '../Pics/normalMonstercard.png'
import Effect from '../Pics/EffectMonsterCard.png'
import Fusion from '../Pics/FusionMonsterCard.png'
import Ritual from '../Pics/RitualMonsterCard.png'

export default function Monster() {
    return (
        <div>
            <h1>Monster Types</h1>
            <div>
                <div>
                    <h3>Normal Monster Card</h3>
                    <div>
                        <img src={Normal} alt="Normal Monster"/>
                    </div>
                    <div>
                        <p>Fusce eget ligula blandit purus tempus consectetur. Fusce euismod augue sem, non porta orci tristique sit amet. Curabitur euismod eros vel est convallis, eu eleifend magna varius. Phasellus interdum elit enim, quis molestie justo iaculis tincidunt. Cras tortor augue, consequat vitae nulla sed, sodales bibendum quam.</p>
                    </div>
                </div>
                <div>
                    <h3>Effect Monster Card</h3>
                    <div>
                    <img src={Effect} alt="Effect Monster"/>
                    </div>
                    <div>
                        <p>Fusce eget ligula blandit purus tempus consectetur. Fusce euismod augue sem, non porta orci tristique sit amet. Curabitur euismod eros vel est convallis, eu eleifend magna varius. Phasellus interdum elit enim, quis molestie justo iaculis tincidunt. Cras tortor augue, consequat vitae nulla sed, sodales bibendum quam.</p>
                    </div>
                </div>
                <div>
                    <h3>Fusion Monster Card</h3>
                    <div>
                    <img src={Fusion} alt="Ritual Monster"/>
                    </div>
                    <div>
                        <p>Fusce eget ligula blandit purus tempus consectetur. Fusce euismod augue sem, non porta orci tristique sit amet. Curabitur euismod eros vel est convallis, eu eleifend magna varius. Phasellus interdum elit enim, quis molestie justo iaculis tincidunt. Cras tortor augue, consequat vitae nulla sed, sodales bibendum quam.</p>
                    </div>
                </div>
                <div>
                    <h3>Ritual Monster Card</h3>
                    <div>
                    <img src={Ritual} alt="Ritual Monster"/>
                    </div>
                    <div>
                        <p>Fusce eget ligula blandit purus tempus consectetur. Fusce euismod augue sem, non porta orci tristique sit amet. Curabitur euismod eros vel est convallis, eu eleifend magna varius. Phasellus interdum elit enim, quis molestie justo iaculis tincidunt. Cras tortor augue, consequat vitae nulla sed, sodales bibendum quam.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
