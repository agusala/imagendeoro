import { Box, Grid } from '@mui/material'
import React from 'react'
import { CardItem, ICard } from '../card/card'
import IFooter from '../footer/footer'
import Slider1 from '../../../../public/SLIDERS WEB_Mesa de trabajo 1.png'
import Slider2 from '../../../../public/SLIDERS WEB-02.png'
import Slider3 from '../../../../public/SLIDERS WEB-03.png'

import RoomIcon from '@mui/icons-material/Room';
import { StaticImageData } from 'next/image'

export interface PropsISectionEventData {
    ubicacion?:string,
    confirmacion?:boolean,
    pago?:string,
    calendario?:string
}

export interface IData {
    ubicacion?:string,
    fecha?:string,
    confirmacionFormURL?:string
    pagoURL?:string,
    tarjetas:ICard[],    

}

export interface IPropsSectionEventData {
    data:IData
}




export const SectionEventData = (props: IPropsSectionEventData) => {
   
  return (
    <Box>
        <Grid container justifyContent="center" alignContent={'center'} textAlign={'center'} bgcolor={'#eeeeee'} paddingBottom='60px' marginTop={'-5px'}>
        {props.data.tarjetas.map((item,i)=>
            {
              
                 return   <Grid fontFamily={'nunito'} item xs={12} sm={3} md={4} alignItems='center' textAlign='center' alignContent='center' justifyContent="center" key={i}><CardItem  title={item.title} description={item.description} image={item.image} button={item.button} urlButton={item.urlButton} bgColor={item.bgColor} key={i} bgcButton={item.bgcButton} textButton={item.textButton}></CardItem></Grid>
        
            }
           
         )} 
        </Grid> 
        <IFooter 
            ubicacion={props.data.ubicacion}
            confirmacion={props.data.confirmacionFormURL?true:false}
            pago={props.data.pagoURL}
            calendario={props.data.fecha}
        />
    </Box>
  )
}
