"use client"
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Box, Paper } from "@mui/material";
import { useState } from 'react';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AlertCalendar from "@/shared/components/footer/dialog/dialogCalendar";
import AlertDialog from "@/shared/components/footer/dialog/dialogAsistencia";
import AlertMercadoPago from "@/shared/components/footer/dialog/dialogMercadoPago";
import AlertLocation from "@/shared/components/footer/dialog/dialogLocation";

export interface BottomItem{
  icon:JSX.Element,
  label:string,
  route?:string,
  show:boolean,
  action:()=>{}
}

export interface PropsIFooter {
  ubicacion?:string,
  confirmacion?:boolean,
  pago?:string,
  calendario?:string
}

function IFooter(props: PropsIFooter) { 

const [value, setValue] = React.useState(0);
const [openHorario,setOpenHorario] = useState(false)
const [openAsistencia,setOpenAsistencia] = useState(false)
const [openPagar,setOpenPagar] = useState(false)
const [openUbicacion,setOpenUbicacion] = useState(false)

const items:BottomItem[] = [{
  icon:<AccessTimeFilledIcon />,
  label:"Horario del evento",
  show:props.calendario?true:false,
  action:()=>{ 
    setOpenHorario(true)
    return true;
  }
},{
  icon:<ThumbUpAltIcon />,
  label:"I want to confirm",
  show:props.confirmacion?true:false,
  action:()=>{
    setOpenAsistencia(true)
    return true;
  }
},{
  icon:<CreditCardIcon />,
  label:"Pagar",
  show:props.pago?true:false,
  action:()=>{
    setOpenPagar(true)
    return true;
  }
},{
  icon:<FmdGoodIcon />,
  label:"Ubicación del evento",
  show:props.ubicacion?true:false,
  action:()=>{
    setOpenUbicacion(true)
    return true;
  }
}]

  return (
    <>
     <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, alignContent:'center' , opacity:"1",zIndex:900}} elevation={10}>
          <BottomNavigation 
          sx={{backgroundColor:'#dddddd'}}
            showLabels
            value={value}
            onChange={(event: any , newValue: any) => {
              console.log(newValue)   
              setValue(newValue)         
              items[newValue].action()                
            }}
          >{
            items.map((item:BottomItem,i) => {
              if(item.show)
                return <BottomNavigationAction sx={{color:'#444242'}} key={i} label={item.label} icon={item.icon}/>
            })
          }
          </BottomNavigation>
      </Paper>
        <AlertCalendar  open={openHorario} handleClose={()=> {
         setOpenHorario(false)
         return true;
        } } handleAgree={()=>{
          setOpenHorario(false)
          return true;
        } } handleDisagree={()=>{
          setOpenHorario(false)
          return true;
        } }/>
        <AlertDialog  open={openAsistencia} handleClose={()=> {
         setOpenAsistencia(false)
         return true;
        } } handleAgree={()=>{
          setOpenAsistencia(false)
          return true;
        } } handleDisagree={()=>{
          setOpenAsistencia(false)
          return true;
        } }/>
        <AlertMercadoPago  open={openPagar} handleClose={()=> {
         setOpenPagar(false)
         return true;
        } } handleAgree={()=>{
          setOpenPagar(false)
          return true;
        } } handleDisagree={()=>{
          setOpenPagar(false)
          return true;
        } }/>
        <AlertLocation  open={openUbicacion} handleClose={()=> {
         setOpenUbicacion(false)
         return true;
        } } handleAgree={()=>{
          setOpenUbicacion(false)
          return true;
        } } handleDisagree={()=>{
          setOpenUbicacion(false)
          return true;
        } }
        locationAddress="uruguay 478, Rio Tercero"
        />
    </>     
  );
}

export default IFooter;
