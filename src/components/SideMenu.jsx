import React from 'react'

const SideMenu = () => {
  return (
    <div className='side-menu'>
              <div className='side-ttl'>
                <img src='/img/setting-logo.png' alt='logo'/>
              <h1>Dashboard</h1>
              </div>

              <div className='side-items'>
              <ul>
                <li className='active' key={'dashboard'}><i className="fa-solid fa-chart-line"></i> Dashboard</li>
                <li><i className="fa-solid fa-user" key={'profile'}></i> Profile</li>
                <li><i className="fa-solid fa-plus" key={'addjobs'}></i> Add Jobs</li>
              </ul>

              <ul>
             
                <li>Upgrade to PRO to access all Features!</li>
                <li><i class="fa-solid fa-right-from-bracket" key={'logout'}></i> Logout</li>
              </ul>
              </div>
             
            </div>
  )
}

export default SideMenu
