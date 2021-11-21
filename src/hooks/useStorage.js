import { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { photoStorage } from '../firebase/config';
import { collection, addDoc } from "firebase/firestore"; 
import { db, timestamp } from '../firebase/config'; 

const useStorage = (file) => {
   const [progress, setProgress] = useState(0)
   const [error, setError] = useState(null)
   const [url, setUrl] = useState(null)

   useEffect(() => {
     const storageRef = ref(photoStorage, 'photos/' + file.name);  
    

     const metadata = {
         contentType: 'image/png',
     };
	   
   const uploadTask = uploadBytesResumable(storageRef, file, metadata);

uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setProgress(progress)
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (err) => {
    // Handle unsuccessful uploads
    setError(err)
  }, 
  async  () => {
   await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
      console.log('File available at', url);
      setUrl(url);
      addDoc(collection(db, "images"), {  
	url,                                              createdAt: timestamp                          });
    });
  }
);
   }, [file])
  return { progress, error, url }
};

export default useStorage;
