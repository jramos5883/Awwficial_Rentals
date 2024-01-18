import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { lato } from '../ui/fonts';
import { playfairDisplay } from '../ui/fonts';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function SubmittedModal({modalOpen, setModalOpen}) {
  // const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={modalOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle 
            sx={{
              fontSize:'30px', 
              fontFamily: playfairDisplay.style.fontFamily,
              fontWeight: '500',
              paddingRight:"400px", 
              paddingBottom:"0px"
                }}>
            Submitted!
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position:'absolute',
            right: 8,
            top: 8,
            color:"#7E1F86",
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <DialogContentText 
            id="alert-dialog-slide-description"
            sx={{
              fontWeight:'500',
              color:"black",
              fontFamily: lato.style.fontFamily,
            }} 
          >
                Please wait 3-5 business days to hear back.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}