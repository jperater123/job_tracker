import React from 'react'
import '../dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard_container'>
        <div className='header'>
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
                <img src='img/monitor.png' alt='group'/>
                <div className=''>
                    <span>Total Application</span>
                    <h2>5,423</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard