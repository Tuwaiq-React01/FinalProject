import React from 'react'
import SNormal from '../Pics/SNormal.png'
import SContious from '../Pics/SContinous.png'
import SField from '../Pics/SField.png'
import SEquip from '../Pics/SEquip.png'
import SQuick from '../Pics/SQuick.jpg'
import SRitual from '../Pics/SRitual.png'
import '../Css/MST.css';

export default function Spell() {
    return (
        <div>
            <h1>Spell Types</h1>
            <div>
                <div style={{display: 'flex' ,flex_direction:"row", align_content:"flex-start"}}>
                    <h3>Normal Spell Card </h3> 
                    <div>
                        <img src={SNormal} alt="Normal Monster"/>
                    </div>
                    <div>
                        <p>Fusce eget ligula blandit purus tempus consectetur. Fusce euismod augue sem, non porta orci tristique sit amet. Curabitur euismod eros vel est convallis, eu eleifend magna varius. Phasellus interdum elit enim, quis molestie justo iaculis tincidunt. Cras tortor augue, consequat vitae nulla sed, sodales bibendum quam.</p>
                    </div>
                </div>
                <br/>
                <div style={{display: 'flex' ,flex_direction:"row", align_content:"flex-start"}}>
                    <h3>Continous Spell Card </h3>
                    <div>
                    <img src={SContious} alt="Effect Monster"/>
                    </div>
                    <div>
                        <p>Fusce eget ligula blandit purus tempus consectetur. Fusce euismod augue sem, non porta orci tristique sit amet. Curabitur euismod eros vel est convallis, eu eleifend magna varius. Phasellus interdum elit enim, quis molestie justo iaculis tincidunt. Cras tortor augue, consequat vitae nulla sed, sodales bibendum quam.</p>
                    </div>
                </div>
                <br/>
                <div style={{display: 'flex' ,flex_direction:"row", align_content:"flex-start"}}>
                    <h3>Field Spell Card</h3>
                    <div>
                    <img src={SField} alt="Ritual Monster"/>
                    </div>
                    <div>
                        <p>Fusce eget ligula blandit purus tempus consectetur. Fusce euismod augue sem, non porta orci tristique sit amet. Curabitur euismod eros vel est convallis, eu eleifend magna varius. Phasellus interdum elit enim, quis molestie justo iaculis tincidunt. Cras tortor augue, consequat vitae nulla sed, sodales bibendum quam.</p>
                    </div>
                </div>
                <br/>
                <div style={{display: 'flex' ,flex_direction:"row", align_content:"flex-start"}}>
                    <h3>Eqiup Spell Card</h3>
                    <div>
                    <img src={SEquip} alt="Ritual Monster"/>
                    </div>
                    <div>
                        <p>Fusce eget ligula blandit purus tempus consectetur. Fusce euismod augue sem, non porta orci tristique sit amet. Curabitur euismod eros vel est convallis, eu eleifend magna varius. Phasellus interdum elit enim, quis molestie justo iaculis tincidunt. Cras tortor augue, consequat vitae nulla sed, sodales bibendum quam.</p>
                    </div>
                </div>
                <br/>
                <div style={{display: 'flex' ,flex_direction:"row", align_content:"flex-start"}}>
                    <h3>Quick-Play Spell Card</h3>
                    <div>
                    <img src={SQuick} alt="Ritual Monster"/>
                    </div>
                    <div>
                        <p>Fusce eget ligula blandit purus tempus consectetur. Fusce euismod augue sem, non porta orci tristique sit amet. Curabitur euismod eros vel est convallis, eu eleifend magna varius. Phasellus interdum elit enim, quis molestie justo iaculis tincidunt. Cras tortor augue, consequat vitae nulla sed, sodales bibendum quam.</p>
                    </div>
                </div>
                <br/>
                <div style={{display: 'flex' ,flex_direction:"row", align_content:"flex-start"}}>
                    <h3>Ritual Spell Card</h3>
                    <div>
                    <img src={SRitual} alt="Ritual Monster"/>
                    </div>
                    <div>
                        <p>Fusce eget ligula blandit purus tempus consectetur. Fusce euismod augue sem, non porta orci tristique sit amet. Curabitur euismod eros vel est convallis, eu eleifend magna varius. Phasellus interdum elit enim, quis molestie justo iaculis tincidunt. Cras tortor augue, consequat vitae nulla sed, sodales bibendum quam.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
