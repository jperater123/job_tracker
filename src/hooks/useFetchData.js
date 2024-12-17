import { useEffect } from 'react';
import { collection, query, where, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

//used in Dashboard
const useFetchData = (user, setDname, setJobs, displayName) => {
  useEffect(() => {
    const fetchGenericName = async () => {
      try {
        if (!user?.email) return; // Early return if user is not logged in

        if(displayName == "null"){
        console.log("Fetching user name...");
        const q = query(collection(db, 'users'), where('email', '==', user.email));
        const getName = await getDocs(q);
        const fetchName = getName.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        if (fetchName.length > 0) {
          setDname(fetchName[0].name);
          console.log("Name:", fetchName[0].name);
        }
    }else {
        setDname(displayName)
    }
      } catch (error) {
        console.error("Error fetching name:", error);
      }
    };

    const fetchJobs = async () => {
      try {
        if (!user?.uid) {
          console.log("User not logged in");
          return;
        }

        console.log("Setting up real-time listener for job data...");
        const q = query(collection(db, 'jobs_list'), where('userId', '==', user.uid));


        // Real-time listener
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const fetchData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setJobs(fetchData);
        console.log("Jobs data (real-time):", fetchData);
      },
      (error) => {
        console.error("Error fetching real-time jobs:", error);
      }
    );

    // Cleanup listener on unmount
    return () => unsubscribe();

  } catch (error) {
    console.error("Error setting up real-time listener:", error);
  }
    };

    // Call the functions
    fetchGenericName();
    fetchJobs();
  }, [user, setDname, setJobs]);
};

export default useFetchData;
