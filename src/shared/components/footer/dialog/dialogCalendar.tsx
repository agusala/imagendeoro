import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Icon, IconButton, Stack } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';

export interface propsDialogCalendar {    
    open:boolean
    handleClose:()=>{}
    handleAgree:()=>{}
    handleDisagree:()=>{}
 }

export default function DialogCalendar(props: propsDialogCalendar) {
  
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"¡Agendá la fecha en tu Google Calendar!"}
        </DialogTitle>
        <Grid container justifyContent={"center"}>
                     
          <Grid container justifyContent={"center"} item xs={12} md={6}>

            <IconButton href={"https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MTAzZjR2MHA4MnRldGRrNTFlczc0NGVzYTUgbHVjYXNndXRpZXJyZXoxOTg1QG0&tmsrc=lucasgutierrez1985%40gmail.com"}>
            SAB 07/10 20:00HS <br />
                <EventIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
        <DialogActions>
          <Button onClick={props.handleDisagree}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


