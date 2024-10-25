import { set } from 'firebase/database'
import React, { useContext, useState } from 'react'
import { db, auth, google } from '../firebase'
import { UserContext } from '../UserContext'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { collection, doc, setDoc } from 'firebase/firestore'
const SignIn = () => {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(UserContext);
    const [error, setError] = useState('')

    // for google auth
    const [name, setName] = useState('')

    const handleGoogleSignIn = async() => {
      try{
        const userGoogleCreds = await signInWithPopup(auth, google);
       

        const newuser = userGoogleCreds.user;
        setUser(newuser)
        console.log(newuser)
       
        const newname = (newuser.displayName).toString();

        const newemail = (newuser.email).toString();

        const userDocRefGoogle = doc(collection(db, 'users'), newuser.uid)
        await setDoc(userDocRefGoogle, {
          name: newname,
          email: newemail
        })
        console.log("success"+ email)

        navigate('/profile')
      }
      catch(error) {
        const apiKey = process.env.REACT_APP_apiKey;
const authDomain = process.env.REACT_APP_authDomain;
const projectId = process.env.REACT_APP_projectId;
const storageBucket = process.env.REACT_APP_storageBucket;
const messagingSenderId = process.env.REACT_APP_messagingSenderId;
const appId = process.env.REACT_APP_appId;

  console.log("api"+apiKey)
  console.log("authDomain"+authDomain)
  console.log("projectId"+projectId)
  console.log("storageBucket"+storageBucket)
  console.log("messagingSenderId"+messagingSenderId)
  console.log("appId"+appId)
        setError(error)
      }
    };
  
    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          console.log(userCredential.user)
          setUser(userCredential.user);
          console.log("success")
          navigate('/profile')
        } catch (error) {
          console.error('Error signing in:', error);
          setError('Invalid email or password');
        }
      };
  return (
    <>
    <div className='sign_in_container'>
      <div className='logo'>
        <img src='img/logo.png' alt='logo'/> Job tracker app
      </div>
      <div className='sign_in_left'>
      <h1>Sign in <br/>
      <span>Please login to continue to your account.</span></h1>
      <div className='error'>
        {error}
        </div>
      
    <form onSubmit={handleSignIn}>
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
        <label>
        <input type='checkbox'/> Keep me logged in
        </label>
        <button type='submit'>Sign In</button>

        <div className='or'>
          <span></span>
          or
          <span></span>
        </div>

        <div className='sign_in_google' onClick={handleGoogleSignIn}>
          Sign in with Google <img src='/img/google.png' alt='google'/>
        </div>
        
        <div className='reg'>
        <span>Need an account?</span> <a href='/signup'>Create one</a>
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

export default SignIn
