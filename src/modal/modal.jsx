import React, { useState } from 'react';
import '../modal.css';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Modal = ({ isOpen, onClose, jobs }) => {
    const [status, setStatus] = useState("")
    const [notes, setNotes] = useState("")
  if (!isOpen) return null;  // If not open, return null to avoid rendering

  
    
    const updateJobDetails = async (e) => {
        e.preventDefault();
        try{
        const id = jobs.id;
        const jobDocRef = doc(db, "jobs_list",id);
        const detailsSnapshot = await getDoc(jobDocRef)

        if (detailsSnapshot.exists()) {
            console.log("stat", jobs.status)
            // Document exists, proceed with the update
            await updateDoc(jobDocRef, {
                status: status ? status: jobs.status,
                note: notes ? notes: jobs.note,
            });
            alert("Job updated successfully!");
            onClose();
            setStatus(jobs.status)
            setNotes(jobs.note)
           
          } else {
            alert("Document does not exist. Please check the Job ID.");
          }
    }
    catch(error){
        console.error("Error updating document:", error);
    }
    }
    
   
    // {setStatus(jobs.status)}
    //       {setNotes(jobs.note)}
  return (
    <>
    {console.log("ja", jobs)}
      <div className="edit-job-modal-overlay">
        <div className="edit-job-modal">
          {/* Close button */}
          
          <button className="close-btn" onClick={onClose}>&times;</button>
          <h2>Job Information</h2>
  
            <form onSubmit={updateJobDetails}>
                <div className='details'>

                <div>
                <label htmlFor='company'>Company: </label>
                <input id="compapny" type='text' disabled value={jobs.CompanyName}/>
                </div>

                <div>
                <label htmlFor='email'>Email: </label>
                <input id='email' type='text' disabled value={jobs.email}/>
                </div>

                <div>
                <label htmlFor='number'>Number: </label>
                <input id='number' type='text' value={jobs.number} disabled/>
                </div>

                <div>
                <label htmlFor='location'>Location: </label>
                <input id='location' type='text' value={jobs.location} disabled/>
                </div>

                <div>
                <label htmlFor='cop'>Contact Person: </label>
                <input id="cop" type='text' value={jobs.contact_person} disabled/>
                </div>

                <div>
                <label htmlFor='status'>Status: </label>
                <select defaultValue={jobs.status} onChange={(e)=> setStatus(e.target.value)}>
                    <option value={"Rejected"}>REJECTED</option>
                    <option value={"Pending"}>PENDING</option>
                    <option value={"Scheduled"}>SCHEDULED</option>
                    <option value={"Hired"}>HIRED</option>
                </select>
                </div>

                <div>
                <label htmlFor='notes'>Notes: </label>
                <input id="notes" type='text' defaultValue={jobs.note} onChange={(e)=>setNotes(e.target.value)}/>
                </div>
                </div>
            <button type='submit'>Submit</button>
            </form> 

        </div>
      </div>
    </>
  );
}

export default Modal;
