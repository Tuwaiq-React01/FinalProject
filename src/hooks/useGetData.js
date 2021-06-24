import React, { useState } from 'react'
import firebase from "firebase";
export function useGetData() {
    const [documents, setDocuments] = useState([]);
    const db = firebase.firestore();
    React.useEffect(() => {
      db.collection("Ratings")
        .get()
        .then((querySnapshot) => {
          let arr = [];
          querySnapshot.docs.map((doc) =>
            arr.push({ id: doc.id, value: doc.data() })
          );
          setDocuments(arr);
        });
    }, [db]);
    return [documents];
}