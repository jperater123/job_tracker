import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const UserProfile = () => {
  const { user } = useContext(UserContext);
  const [userData, setUserData] = useState(null);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        console.log("thus user"+user)
        console.log(JSON.stringify(user, null, 2));
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
        <div>Loading...
          
          
        </div>
      )}
      <form onSubmit={handleLogout}>
          <button type='submit'>Logout</button>
          </form>
    </div>
  );
};

export default UserProfile;