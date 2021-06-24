import React, { useEffect, useState } from 'react'
import firebase from "firebase";
import { v4 as uuidv4 } from "uuid";
import '../Css/MST.css';

export default function MakeDeck() {
    const[loadedCard,setLoadedCard]=useState([]);
    const [img, setImg] = useState("");
    const[loading,setLoading]=useState(false);
    

    const ref =firebase.firestore().collection("Cards");

    const getLoadCard =()=>{ 
        setLoading(true);
        ref.onSnapshot((querySnapshot)=>{
            const cards =[];
            querySnapshot.forEach((doc)=>{
                cards.push(doc.data());
            });
            setLoadedCard(cards);
            setLoading(false);
        })    
    }
    useEffect(()=>{
        getLoadCard();
    },[])
    // ADD FUNCTION
  function addCard(newCard) {
    ref
      
      .doc(newCard.id)
      .set(newCard)
      .catch((err) => {
        console.error(err);
      });
  }

   //DELETE FUNCTION
   function deleteCard(card) {
    ref
      .doc(card.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  // EDIT FUNCTION
  function editCard(updatedCard) {
    setLoading();
    ref
      .doc(updatedCard.id)
      .update(updatedCard)
      .catch((err) => {
        console.error(err);
      });
  }

    if(loading){
        return <span>Hakona Matata</span>
    }

    return (
        <div>
            <h1>Customaize You'r Deck of Cards</h1>
            <div className="grid-maker">
            <div><h3>Wanna add card? (Paste a url of card img)</h3>
                <div>
                <input type="text" value={img} onChange={(e) =>setImg(e.target.value)}/>
                <button onClick={() =>addCard({img, id: uuidv4()})}>Add The Card</button>
                </div>
            </div>
            
            <div>
                <h3>Card From the Db</h3>
                <div>
                    {loading ? <h3>Card will be there ...</h3> : null}
                {loadedCard.map((card)=>(
                    <div key={card.id}> 
                    <img  src={card.img} alt={"car.img"}/> 
                    <div>
                     <button onClick={() => deleteCard(card)}>Delete the Card</button>
                    <button
                    onClick={() =>
                        editCard({ img ,id: card.id})}>
                    Change the Card
                    </button>
                    </div>
                    
                    
                    
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>
    )
}
