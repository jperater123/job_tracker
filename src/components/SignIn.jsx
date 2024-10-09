import { set } from 'firebase/database'
import React, { useContext, useState } from 'react'
import { auth } from '../firebase'
import { UserContext } from '../UserContext'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
const SignIn = () => {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(UserContext);
    const [error, setError] = useState('')
  
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
    <h1>SIGN IN</h1>
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

        <button type='submit'>Sign In</button>
    </form>
    <div className='error'>
    {error}
    </div>
    </>
  )
}

export default SignIn
