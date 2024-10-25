import React, { useState } from 'react'
import { auth , db, google } from '../firebase'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { collection, doc , setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../UserContext'
import { useContext } from 'react'

const SignUp = () => {
    const { setUser } = useContext(UserContext);
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [name , setName] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const navigate = useNavigate();

    const handleGoogleSignUp =async () => {
      
      try {
          const result = await signInWithPopup(auth, google);
          const user = result.user;
          // Update the user state - Logged in
          setUser(user);

          const newemail = user.email
          setEmail(newemail)
          setName(user.displayName)

         
          console.log(user);
          const userDocRefGoogle = doc(collection(db, 'users'), user.uid);
          await setDoc(userDocRefGoogle, {
            name,
            email
          });

          console.log('User signed up and added to Firestore');
          setSuccess('User signed up successfully');
          navigate("/profile")
         
       
      }
      catch(error) {
          console.log("err google"+error)
          
      }
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        setSuccess('')
        if(password.length < 8){
          setError('Password must be atleast 8 characters');
          return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const userDocRef = doc(collection(db, 'users'), userCredential.user.uid);
            await setDoc(userDocRef, {
              name,
              email
            });

            // clear form
            console.log('User signed up and added to Firestore');
            setSuccess('User signed up successfully');
            setName('')
            setEmail('')
            setPassword('')
          }
        catch(error) {
            setError('error:' + error);
            console.log('error sign up: ', error);
            
        }
    }

  return (
   <>
   <div className='sign_in_container'>
      <div className='logo'>
        <img src='img/logo.png' alt='logo'/> Job tracker app
      </div>
      <div className='sign_in_left'>
      <h1>Sign up <br/>
      <span>Sign up to enjoy the feature of Job tracker app</span></h1>
      <div className='error'>
        {error}
        </div>
      
        <div className='success'>
        {success}
        </div>
      
    <form onSubmit={handleSignUp}>
      <input type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Full Name' required/>



        <input type='email'
        value={email}
        onChange={
            (e) => {setEmail(e.target.value)
              setError('');}
        }
        placeholder='Email'
        required
        />

        <input type='password'
        value={password}
        onChange={
            (e) => {setPassword(e.target.value)
            setError('');}
        }
        placeholder='Password'
        required
        />

        <button type='submit'>Sign up</button>

        <div className='or'>
          <span></span>
          or
          <span></span>
        </div>

        <div className='sign_in_google' onClick={handleGoogleSignUp}>
          Continue with Google <img src='/img/google.png' alt='google'/>
        </div>
        
        <div className='reg'>
        <span>Already have an account? </span> <a href='/signin'>Sign in</a>
        </div>
        </form>
        
      </div>

      <div className='sign_in_right'>
          <img src='/img/sign_in_bg.png' alt="bg"/>
      </div>
    </div>

   </>
  )
}

export default SignUp
