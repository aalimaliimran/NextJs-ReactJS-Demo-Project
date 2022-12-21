import React from 'react'
import Navbar from '../../components/UI/Navbar/Navbar'
import DashboardHeader from '../../components/DashboardHeader'


const Dashboard = () => {
  return (
    <>  
    <Navbar />
    <DashboardHeader />
    <main className='d_layout dashboard'>
    <div>This is Dashboard</div>
    </main>
    
    </>
   
  )
}

export default Dashboard