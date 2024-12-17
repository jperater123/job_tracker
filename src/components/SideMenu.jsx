import React from 'react'
import { NavLink } from 'react-router-dom'
import Logout from '../utilities/logout'

const SideMenu = () => {
  return (
    <div className='side-menu'>
              <div className='side-ttl'>
                <img src='/img/setting-logo.png' alt='logo'/>
              <h1>Dashboard</h1>
              </div>

              <div className='side-items'>
              <ul>
                <NavLink to="/dashboard" exact activeClassName="active">
                <li key={'dashboard'}><i className="fa-solid fa-chart-line"></i> Dashboard</li>
                </NavLink>
               <NavLink to="/profile" exact activeClassName="active">
               <li><i className="fa-solid fa-user" key={'profile'}></i> Profile</li>
               </NavLink>
               <NavLink to="/addjobs" exact activeClassName="active">
               <li><i className="fa-solid fa-plus" key={'addjobs'}></i> Add Jobs</li>
               </NavLink>
                
                
              </ul>

              <ul>
             
                <a>Upgrade to PRO to access all Features!</a>
                <a onClick={()=> {
                  Logout()
                }}><i className="fa-solid fa-right-from-bracket" key={'logout'} ></i> Logout</a>
              </ul>
              </div>
             
            </div>
  )
}

export default SideMenu
