import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function BasicSnackbar ({ open, onClose, severity, message, vertical, horizontal }) {
  return (
  <>
      <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={6000}
          onClose={onClose}
      >
          <Alert
              onClose={onClose}
              severity={severity}
          >
              {message}
          </Alert>
      </Snackbar>
  </>
);
};

export default BasicSnackbar;