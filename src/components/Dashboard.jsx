import React, { useContext, useEffect, useState } from 'react'
import '../dashboard.css'
import { UserContext } from '../UserContext'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase'

const Dashboard = () => {

    const { user } = useContext(UserContext)
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        
        try {
           
            const fetchJobs = async () => {
                console.log("fetching job datas ...")
                if(user) {      
                    const q = query(collection(db, 'jobs_list'), where('userId', '==', user.uid));
                    const querySnapshot = await getDocs(q);

                    const fetchData = querySnapshot.docs.map(doc => ({id : doc.id, ...doc.data() }));
                    setJobs(fetchData);
                    console.log("asd"+fetchData);
                }
                else {
                    console.log("User not logged")
                }
               
            }
            fetchJobs();
           
        }
        catch(error) {
            console.log("error: "+ error)
        }
       
    }, [user])

  return (
    <div className='dashboard_container'>
        <div className='header'>
            {console.log(jobs)}
            <h1>Hello User 👋🏼,</h1>
            <input type='search' 
            placeholder='Search'/>
        </div>

        <div className='summary'>
            <div className='total_application'>
                <img src='img/group.png' alt='group'/>
                <div className=''>
                    <span>Total Application</span>
                    <h2>5,423</h2>
                </div>
            </div>

            <div className='total_application'>
                <img src='img/single.png' alt='group'/>
                <div className=''>
                    <span>Total Application</span>
                    <h2>5,423</h2>
                </div>
            </div>

            <div className='total_application'>
                <img src='img/monitor1.png' alt='group'/>
                <div className=''>
                    <span>Total Application</span>
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
                    {/* set datas */}
                    {
                        jobs.map(job => (
                            <tr>
                            <td>{job.CompanyName}</td>
                            <td>{job.email}</td>
                            <td>{job.number}</td>
                            <td>{job.location}</td>
                            <td>{job.contact_person}</td>
                            <td className={`${job.status}`}>{job.status}</td>
                            </tr>
                        ))
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