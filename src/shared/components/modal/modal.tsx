import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './modal.css'
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export interface IData{
    text:string,
    buttonAction:boolean,
    dataTitle:string,
    dataDescription:string,
    width?:string,
    fontSize?:string
}

export default function BasicModal(props:IData) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(props.buttonAction);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className="buttonModal"sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "5px",
                width: props.width ? props.width :"50%",
                fontSize:props.fontSize?props.fontSize:'12px',
               fontWeight:900, 
                ':hover':{
                  backgroundColor:"white",
                  padding:'10px',
                  color:'black',
                  transitionDuration:'1s ,0.5s'
                }
              }}>{props.text}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2" color={'black'}>
          <u><b> {props.dataTitle}</b></u>
          </Typography>
          <Typography id="modal-modal-description" variant="body1" component="h2" sx={{ mt: 2 }} color={'black'}>
          We kindly request all attendees to embrace a {'"Sweet Elegance"'} dress code for our event.{<br/>}
          <u><b>For Men:</b></u> Formal attire is required, and we encourage gentlemen to wear elegant tuxedos or suits.{<br/>}
          <u><b>For Women:</b></u>  Ladies, we invite you to grace the occasion in beautiful, floor-length dresses that exude elegance and charm. Embrace your sweet side and let your outfits reflect the beauty of the evening.{<br/>}
          We look forward to sharing this special event with you in a celebration of sweet style and elegance.
          
         


          </Typography>
        </Box>
      </Modal>
    </div>
  );
}