import { set } from 'firebase/database'
import React, { useContext, useState } from 'react'
import { auth } from '../firebase'
import { UserContext } from '../UserContext'
import { signInWithEmailAndPassword } from 'firebase/auth'
const SignIn = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(UserContext);
  
    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          setUser(userCredential.user);
          console.log("success")
        } catch (error) {
          console.error('Error signing in:', error);
        }
      };
  return (
    <>
    <form onSubmit={handleSignIn}>
        <input type='text'
        value={email}
        onChange={
            (e) => setEmail(e.target.value)
        }
        placeholder='Email'
        required
        />

        <input type='password'
        value={password}
        onChange={
            (e) => setPassword(e.target.value)
        }
        placeholder='Password'
        required
        />

        <button type='submit'>Sign In</button>
    </form>
    </>
  )
}

export default SignIn
