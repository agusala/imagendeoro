import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export interface propsDialogLocation {    
    open:boolean
    locationAddress:string,
    handleClose:()=>{}
    handleAgree:()=>{}
    handleDisagree:()=>{}
 }

export default function DialogLocation(props: propsDialogLocation) {
  
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Salón de Fiestas y Eventos 1929, (Uruguay 478, Río Tercero, Córdoba"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Puede ver la ubicación en el mapa haciendo click
            <Button  href={"https://www.google.com.ar/maps/dir/Tu ubicación/"+props.locationAddress+"/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x95cd68ca4f27c03d:0x9ce2d9c06d92846d!2m2!1d-64.1217734!2d-32.1597139"}>
            aquí
          </Button>
          
          </DialogContentText>
        </DialogContent>
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


