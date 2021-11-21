import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs, orderBy } from "firebase/f
irestore";

const useFireStore (collection) => {
  const [docs,setDocs] = useState([])
  
  useEffect(() => {
   
    const querySnapshot = await getDocs(collection(db, "images"), orderBy("createdAt", "desc"));
    const documents = []
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
  documents.push({...doc.data(), id: doc.id})
  setDocs(documents)
});
  
   return () => querySnapshot();
  }, [collection])

 return { docs }
};

export default useFirestore;
