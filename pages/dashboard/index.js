import React from 'react'
import Navbar from '../../components/Common/UI/Navbar/Navbar'
import Header from '../../components/Dashboard/Header'


const Dashboard = () => {
  return (
    <>  
    <Navbar />
    <Header />
    <main className='d_layout dashboard'>
    <div>This is Dashboard</div>
    </main>
    
    </>
   
  )
}

export default Dashboard