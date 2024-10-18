import React, { useState } from 'react'
import { collection, doc , setDoc } from 'firebase/firestore'
import { UserContext } from '../UserContext'
import { useContext } from 'react'
import {  db } from '../firebase'

const AddJob = () => {

    const [companyName , setCompanyName] = useState('')
    const [email , setEmail] = useState('')
    const [number , setNumber] = useState('')
    const [loc , setLoc] = useState('')
    const [poc , setPoc] = useState('')
    const [status , setStatus] = useState('')
   
    const [note , setNote] = useState('')

    const { user } = useContext(UserContext);

    const handleAddJob = async (e) => {
        e.preventDefault()

        if(!status){
            console.log("EMPTY STATUS")
            return;
        }
        const newdate = new Date()
        if(user) {
            const userId = user.uid
            try{
       
                // save the data to DB
                const DataDocRef = doc(collection(db, 'jobs_list'));
                await setDoc(DataDocRef, {
                    CompanyName: companyName,
                    email: email,
                    number: number,
                    location: loc,
                    contact_person: poc,
                    status: status,
                    note: note,
                    date: newdate,
                    userId: userId,
                })
                console.log("added job")
        
                //clear fields
                setCompanyName('')
                setEmail('')
                setNumber('')
                setLoc('')
                setPoc('')
                setStatus('Pending')
                setNote('')
                }
                catch(err){
                    console.log("error: "+ err)
                }
        }
        else {
            console.log("ERROR: USER NOT LOGGED IN")
        }
        
    
   
       
        
    }

  return (
    <div>
      <h1>
        ADD JOBS
      </h1>

      <form onSubmit={handleAddJob}>
        <input type='text' placeholder='Company Name'
        value={companyName}
        onChange={(e) => {
            setCompanyName(e.target.value)
        }}
        />

        <input type='email' placeholder='Email'
        value={email}
        onChange={(e) => {
            setEmail(e.target.value)
        }}
        />

    <input type='text' placeholder='Phone Number'
        value={number}
        onChange={(e) => {
            setNumber(e.target.value)
        }}
        />

    <input type='text' placeholder='Work Location'
        value={loc}
        onChange={(e) => {
            setLoc(e.target.value)
        }}
        />

    <input type='text' placeholder='Contact Person'
        value={poc}
        onChange={(e) => {
            setPoc(e.target.value)
        }}
        />  
    <label htmlFor="status">
        Status
    </label>
    <select id="status" value={status} onChange={(e) => {
        setStatus(e.target.value)
    }}>
        <option value="">Choose an option</option>
        <option value="Pending">Pending</option>
        <option value="Hired">Hired</option>
        <option value="Rejected">Rejected</option>
        <option value="Scheduled">Scheduled Interview</option>
    </select>

    <input type='text' placeholder='Notes'
        value={note}
        onChange={(e) => {
            setNote(e.target.value)
        }}
        />  

    <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddJob
