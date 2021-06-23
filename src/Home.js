import React, {useState} from 'react';
import Card from "./Card";
import SingForm from "./SingForm";
import TextForm from "./TextForm";
import { useAlert } from 'react-alert'

function Home(props) {
    const [showSing,setShowSing] = useState(false)
    const [showText,setShowText] = useState(false)
    const alert = useAlert()

    function singform() {
        setShowSing(true)
    }
    function textform() {
        setShowText(true)
    }
    function reset(){
        alert.show("The call has been made :)")
        setShowText(false)
        setShowSing(false)
    }
    return (
        <div>
             <div className={!showText && !showSing ?"card-group col d-flex justify-content-center card1 animate__animated animate__fadeInDown" : "animate__animated animate__fadeOutLeft animate__slower card-group col d-flex justify-content-center card1" }>
                <Card
                    img={"https://ih1.redbubble.net/image.1873005114.5879/raf,750x1000,075,t,FFFFFF:97ab1c12de.u3.jpg"} title={"Robot Singing"} show={singform} text={"Make a robot call someone and sing to them the lyrics of a song of your choice"}/>
                <Card
                    img={"https://www.uplync.com/wp-content/uploads/2019/08/Robot-with-phone_UpLync-768x768.jpg"} title={"Robot Calling"} show={textform} text={"Make a robot call someone and say anything you want the robot to say"}/>
            </div>
            {showSing ?<SingForm reset={reset}/> : null}
            {showText ? <TextForm reset={reset}/>: null}
        </div>
    );
}

export default Home;