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
                    <tr>
                        <td>FDCI</td>
                        <td>test@gmail.com</td>
                        <td>123456789</td>
                        <td>IT PARK</td>
                        <td>ME</td>
                        <td className='rejected'>Rejected</td>
                    </tr>
                    <tr>
                        <td>FDCIadasdasdasdasdasdasdasdasd</td>
                        <td>test@gmail.com</td>
                        <td>123456789</td>
                        <td>IT PARK</td>
                        <td>ME</td>
                        <td className='hired'>Hired</td>
                    </tr>
                    <tr>
                        <td>FDCIssssssssssssssssssss</td>
                        <td>test@gmail.commmmmmmmmmmmmm</td>
                        <td>123456789</td>
                        <td>IT PARKddddddadadsadasdasdasd</td>
                        <td>MEdasdasdasdasdasdasd</td>
                        <td className='pending'>PENDING</td>
                    </tr>
                    <tr>
                        <td>FDCI</td>
                        <td>test@gmail.com</td>
                        <td>123456789</td>
                        <td>IT PARK</td>
                        <td>ME</td>
                        <td className='pending'>PENDING</td>
                    </tr>
                    <tr>
                        <td>FDCI</td>
                        <td>test@gmail.com</td>
                        <td>123456789</td>
                        <td>IT PARK</td>
                        <td>ME</td>
                        <td className='pending'>PENDING</td>
                    </tr>
                    <tr>
                        <td>FDCI</td>
                        <td>test@gmail.com</td>
                        <td>123456789</td>
                        <td>IT PARK</td>
                        <td>ME</td>
                        <td className='pending'>PENDING</td>
                    </tr>
                    <tr>
                        <td>FDCI</td>
                        <td>test@gmail.com</td>
                        <td>123456789</td>
                        <td>IT PARK</td>
                        <td>ME</td>
                        <td className='pending'>PENDING</td>
                    </tr>
                    <tr>
                        <td>FDCI</td>
                        <td>test@gmail.com</td>
                        <td>123456789</td>
                        <td>IT PARK</td>
                        <td>ME</td>
                        <td className='rejected'>Rejected</td>
                    </tr>
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