import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ScrollDialog(props) {
  const [open, setOpen] = React.useState(props.openState);
  const [scroll, setScroll] = React.useState(props.scrollType);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const [bottom, setBottom] = React.useState(false);

  const handleScroll = (e) => {
      const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
      setBottom(bottom)
  };

  return (
    <div>

      <Dialog
        open={open}
      /*   onClose={handleClose({reason:'onBackdropClick'}) }  remove this for disable backdrop click*/
        disableEscapeKeyDown
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{props.title}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}  onScroll={handleScroll}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button className='btn' onClick={handleClose} disabled={!bottom}>Agree</button>
        </DialogActions>
      </Dialog>
    </div>
  );
}