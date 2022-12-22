import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal_md"
      >
        <Box className='modal_box'>
          <div className='modal_header'>
              <h2>{props.title}</h2>
          </div>
          <div className='modal_body'>
            {props.description}
          </div>
         <div className='modal_footer'>

         </div>
        </Box>
      </Modal>
    </div>
  );
}