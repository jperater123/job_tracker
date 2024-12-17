import React, { useContext, useEffect, useState } from 'react'
import '../dashboard.css'
import { UserContext } from '../UserContext'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase'
import Modal from '../modal/modal'
import { useNavigate } from 'react-router-dom'
import useFetchData
 from '../hooks/useFetchData'
 
const Dashboard = () => {

    const { user } = useContext(UserContext)
    const [jobs, setJobs] = useState([]);
    const [dname, setDname] = useState('');
    const [selectedJob, setSelectedJob] = useState(null);

    const temp_lastname = String(user.displayName).split(" ")
    let displayName = temp_lastname[temp_lastname.length -1]

    //modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = (job) => {
        setSelectedJob(job);  // Set the clicked job
        setIsModalOpen(true);  // Open the modal
      };
    
      const closeModal = () => {
        setIsModalOpen(false);  // Close the modal
        setSelectedJob(null);    // Clear selected job (optional)
      };

      
    const navigate = useNavigate()

    //when table is empty - nav to addjobs
    const handleAdd = () => {
        navigate("/addjobs");
    }

    //custom hook
    useFetchData(user, setDname, setJobs, displayName);

  return (
    <div className='dashboard_container'>
        <div className='header'>
            {console.log(jobs)}
            <h1>Hello, {dname} 👋🏼.</h1>
            <input type='search' 
            placeholder='Search'/>
        </div>
        
       
        <div className='summary'>
            <div className='total_application'>
                <img src='img/group.png' alt='group'/>
                <div className=''>
                    <span>Total Application</span>
                    <h2>{jobs.length}</h2>
                </div>
            </div>

            <div className='total_application'>
                <img src='img/single.png' alt='group'/>
                <div className=''>
                    <span>Scheduled Interview</span>
                    <h2>5,423</h2>
                </div>
            </div>

            <div className='total_application'>
                <img src='img/monitor1.png' alt='group'/>
                <div className=''>
                    <span>Pending Application</span>
                    <h2>5,423</h2>
                </div>
            </div>
        </div>


        <div className='table-container'>
            <div className='table-section-header'>
                <div className='t-title'>
                    <h2>ACTIVE APPLICATIONS</h2>
                    <span>List of updated data</span>
                </div>

                <div className='filter'>
                    <input type='search' placeholder='search'/>
                    <select name="sort" id="sort">
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option>All</option>
                    </select>
                </div>

            </div>


            <table>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Contact Person</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                <Modal isOpen={isModalOpen} onClose={closeModal} jobs={selectedJob}/>
                    {/* set datas */}
                    {
                        jobs.length > 0 ?
                        jobs.map(job => (
                            <tr onClick={()=> openModal(job)}>
                            <td key={job.id+1}>{job.CompanyName}</td>
                            <td key={job.id+2}>{job.email}</td>
                            <td key={job.id+3}>{job.number}</td>
                            <td key={job.id+4}>{job.location}</td>
                            <td key={job.id+5}>{job.contact_person}</td>
                            <td key={job.id+6} className={`${job.status}`}>{job.status}</td>
                            </tr>
                        )) 
                        :
                        <tr onClick={handleAdd}>
                            <td > <i className="fa-solid fa-plus"></i> </td>
                            <td>Click here to add job listing</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        }
                </tbody>
            </table>
            <div className='t-footer'>
                <span>Showing data 1-7 of 27 entries</span>

                <div className='pagination'>
                    <ul>
                        <li>&lt;</li>
                        <li className='active'>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>&gt;</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Dashboard