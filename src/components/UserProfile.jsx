import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const UserProfile = () => {
  const { user } = useContext(UserContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  if (!user) {
    return <div>Please sign in to view your profile.</div>;
  }

  return (
    <div>
      {userData ? (
        <div>
          <h1>{userData.name}</h1>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UserProfile;