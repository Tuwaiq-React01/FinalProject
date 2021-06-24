import React from 'react'
import TNormal from '../Pics/TNormal.png'
import TContious from '../Pics/TContious.png'
import TCounter from '../Pics/TCounter.png'

export default function Trap() {
    return (
        <div>
            <h1>Trap Types</h1>
            <div>
                <div>
                    <h3>Normal Trap Card </h3> 
                    <div>
                        <img src={TNormal} alt="Normal Trap"/>
                    </div>
                    <div>
                        <p>Fusce eget ligula blandit purus tempus consectetur. Fusce euismod augue sem, non porta orci tristique sit amet. Curabitur euismod eros vel est convallis, eu eleifend magna varius. Phasellus interdum elit enim, quis molestie justo iaculis tincidunt. Cras tortor augue, consequat vitae nulla sed, sodales bibendum quam.</p>
                    </div>
                </div>
                <div>
                    <h3>Contious Trap Card </h3>
                    <div>
                    <img src={TContious} alt="Contious Trap"/>
                    </div>
                    <div>
                        <p>Fusce eget ligula blandit purus tempus consectetur. Fusce euismod augue sem, non porta orci tristique sit amet. Curabitur euismod eros vel est convallis, eu eleifend magna varius. Phasellus interdum elit enim, quis molestie justo iaculis tincidunt. Cras tortor augue, consequat vitae nulla sed, sodales bibendum quam.</p>
                    </div>
                </div>
                <div>
                    <h3>Counter Trap Card</h3>
                    <div>
                    <img src={TCounter} alt="Counter Trap"/>
                    </div>
                    <div>
                        <p>Fusce eget ligula blandit purus tempus consectetur. Fusce euismod augue sem, non porta orci tristique sit amet. Curabitur euismod eros vel est convallis, eu eleifend magna varius. Phasellus interdum elit enim, quis molestie justo iaculis tincidunt. Cras tortor augue, consequat vitae nulla sed, sodales bibendum quam.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
