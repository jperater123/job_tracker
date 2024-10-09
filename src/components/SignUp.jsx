import React, { useState } from 'react'
import { auth , db } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, doc , setDoc } from 'firebase/firestore'

const SignUp = () => {

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [name , setName] = useState('')
    const [error, setError] = useState('')

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const userDocRef = doc(collection(db, 'users'), userCredential.user.uid);
            await setDoc(userDocRef, {
              name,
              email
            });
            console.log('User signed up and added to Firestore');
          }
        catch(error) {
            setError('Invalid email or password');
            console.log('error sign up: ', error);
            
        }
    }

  return (
   <>
    <h1>SIGN UP</h1>
    <form onSubmit={handleSignUp}>
        <input type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='"Name' required/>

        <input type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='"Email' required/>

        <input type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='"Password' required/>

        <button type='submit'>Sign Up</button>
    </form>
    <div className='error'>
    {error}
    </div>
    
    <p>Already have an account? <a href='/SignIn'>Login here</a></p>
   
   </>
  )
}

export default SignUp
