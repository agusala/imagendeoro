import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, IconButton } from '@mui/material';

export interface propsDialogMercadoPago {    
    open:boolean
    handleClose:()=>{}
    handleAgree:()=>{}
    handleDisagree:()=>{}
 }

export default function DialogMercadoPago(props: propsDialogMercadoPago) {
  
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"¿Querés pagar tu invitación?"}
        </DialogTitle>
        <DialogContentText id="alert-dialog-description">
            Te dejamos el link de MercadoPago
        </DialogContentText>
          <Grid container justifyContent={"center"}>
            <Grid container justifyContent={"center"} item xs={12} md={6}>
              <a href={"https://mpago.la/2SQP6Up"}>
                <img src="C:\Users\Usuario\Desktop\mercadopago-nuevo-logo-12208FF614-seeklogo.com.png" alt="Icono de MercadoPago"/>
              </a>
            </Grid>
          </Grid>
        
        <DialogActions>
          <Button onClick={props.handleDisagree}>
            Cancelar
          </Button>
          <Button onClick={props.handleAgree} autoFocus>
            Aceptar
          </Button> 
        </DialogActions>
      </Dialog>
    </div>
  );
}

        