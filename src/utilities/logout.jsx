import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Logout = async () => {
    console.log("triggered")
    try {
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }

export default Logout
