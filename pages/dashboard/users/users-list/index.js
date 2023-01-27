import React, { useState } from 'react'
import BasicSnackbar from '../../../../components/Common/UI/Snackbar/BasicSnackbar';
import UserTable from '../../../../components/Dashboard/Users/UserTable/UserTable';
import BasicCard from '../../../../components/Common/UI/BasicCard/BasicCard';
import Navbar from '../../../../components/Common/UI/Navbar';
import Header from '../../../../components/Dashboard/Header';

const UsersList = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };




    return (
        <>
        <Navbar/>
        <Header/>
        <main className='d_layout'>
   
        <BasicCard 
          content={<UserTable onError={() => setOpen(true)} />}
        />
        <BasicSnackbar
         vertical= 'top'
         horizontal= 'right'
          open={open}
          severity="error"
          message="Data couldn't be fetched"
          onClose={handleClose}
        />
  
      </main>
      </>
    )
}

export default UsersList
