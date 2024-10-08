import React, { useState } from 'react'
import { auth , db } from '../firebase'

const SignUp = () => {

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [name , setName] = useState('')

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            await db.collection('users').doc(userCredential.user.uid).set({
                name,
                email
        });
        }
        catch(error) {
            console.log('error sign up: ', error);
        }
    }

  return (
   <>

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
   
   </>
  )
}

export default SignUp
