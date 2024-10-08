import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCJRtNoMMfe4wN1g98ZCS-vjSFiAr70-6Y",
    authDomain: "job-tracking-db2c8.firebaseapp.com",
    projectId: "job-tracking-db2c8",
    storageBucket: "job-tracking-db2c8.appspot.com",
    messagingSenderId: "462958444538",
    appId: "1:462958444538:web:f6a637a5488302e7012e43"
  };



  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  
  export { auth, db };