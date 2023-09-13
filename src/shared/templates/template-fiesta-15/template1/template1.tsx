import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, Grid, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Instagram } from "@mui/icons-material";
import {CarruselMultiple} from "../../../components/carrusel-multiple/carruselMultiple"
import './template1.css'
import BasicModal from "@/shared/components/modal/modal";
import IconFiesta from 'public/Icono-fiesta.png';
import IconRegalo from 'public/Icono-regalo.png';
import IconDressCode from 'public/Icono-dresscode.png';
import IconDatos from 'public/Icono-datos.png';
import IconSpotify from 'public/Icono-shopify.png';

// [Carrusel1,Carrusel2,Carrusel3,Carrusel4,Carrusel5,Carrusel6,Carrusel7,Carrusel8,Carrusel9,Carrusel10]
interface ITemplate1 {
  colorPrimary:string;
  colorSecundary:string;
  tipography:string;
  dateBirth:string;
  music:string;
  imageHeader:StaticImageData;
  nameBirthdayGirl:string;
  dayAndHour:string;
  place:string;
  locationOnMap:string;
  carruselImages:StaticImageData[];
  beforeDinnerButton:string;
  afterDinnerButton:string;
  hotels:string;
  dressCode:string;
  spotify:string;
  imageInstagram:StaticImageData;
  arrobaInstagram:string;
  urlInstagram:string;
  alias:string;
  phone:string;
  email:string;
}

export const Template1 = (props:ITemplate1) => {
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(true);
  
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`${props.dateBirth}/${year}`) - +new Date()
      
        let timeLeft = {
            days:0,
            hours:0,
            minutes:0,
            second:0,
            llego:''
        };
      
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            second:Math.floor((difference/1000)%60),
            llego:''
          };
        }else{
            timeLeft={
                days: 0,
                hours: 0,
                minutes: 0,
                second:0,
                llego:'LLEGÓ MI GRAN DÍA, GRACIAS POR SER PARTE DE EL' 
            }
        }
      
        return timeLeft;
      }
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
      });
     
      const handleCloseModal =()=>{
        setOpenModal(false)
        const audio =new Audio(`${props.music}`)
        audio.play()
      }

  return (
    <>
    <div style={{ backgroundColor: props.colorPrimary }}>
      <Dialog
        style={{ zIndex: 1 }}
        open={openModal}
        keepMounted
        onClose={handleCloseModal}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle width={250} bgcolor={props.colorSecundary} color={'white'} textAlign={'center'} fontFamily={props.tipography} className='title-modal'>{`${props.nameBirthdayGirl}`} <br/>MIS 15</DialogTitle>
        <DialogContent style={{ backgroundColor: props.colorPrimary }}>
          <DialogContentText id="alert-dialog-slide-description" textAlign={'center'}>
            EventUp
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Box sx={{ position: "relative",}}>
        <Image
          src={props.imageHeader}
          alt={"EventUp"}
          style={{ height: "70vh", width: "100%", objectFit: "cover", backgroundColor:'rgba(0,0,0,0.9)', filter:'brightness(0.7)' }}
          className="imagen-header"
        ></Image>
        <Box mt={'-45vh'} pb={'16vh'} className={'content-tempo'} zIndex={9}  sx={{filter:'brightness(1)'}}>
          <Typography
            variant="h3"
            component="h2"
            color={"white"}
            textAlign={"center"}
            fontSize={'80px'}
            fontWeight={900}
            sx={{ marginBottom: '-20px' }}
            className="header-text"
            fontFamily={props.tipography}
          >
            {props.nameBirthdayGirl}
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            color={"white"}
            textAlign={"center"}
            className="header-text-2"
            fontFamily={props.tipography}
          >
            15 años
          </Typography>
        </Box>
      </Box>
      <Box sx={{ backgroundColor:props.colorSecundary, textAlign: "center", p: '4rem', mt: '1 em' }} className="block-2">
        <Typography variant="h3" component="h2" fontSize={30} className="text-temporizador">
          {timeLeft.llego==''?'FALTAN':''}
        </Typography>
        <Typography variant="h1" component="h2" fontSize={70} className="number-tempo" fontFamily={props.tipography}>
          {timeLeft.llego == '' ?
            (timeLeft.days + 'D : ' + timeLeft.hours + 'H : ' + timeLeft.minutes + 'M : ' + timeLeft.second + 'S')
            : timeLeft.llego}
        </Typography>


      </Box>
      <Box
        sx={{ color: "black", textAlign: "center", backgroundColor: props.colorPrimary, p: '50px' }}
      >
        <Typography variant="h3" component="h2" fontFamily={props.tipography} className="text-info" >
          Fiesta
        </Typography>
        <Image src={IconFiesta} alt="" height={80}></Image>
        <Typography variant="body1" component="h2" className="fecha-hora">
          ¡Te espero el <b>{props.dayAndHour}</b>
          <br /> para que celebremos juntos este gran momento de mi vida!
        </Typography>
        <br />
        <Typography variant="body1" component="h2" className="lugar">          <br />
          clickeá en el botón de abajo y encontrá las indicaciones para llegar,
          ¡nos vemos!
        </Typography>
        <br />
        <Button
          variant="contained"
          className="mapa"
          sx={{
            backgroundColor: props.colorSecundary,
            color: "white",
            borderRadius: "20px",
            width: "30%",
            fontWeight: 900,
            ':hover': {
              backgroundColor: "white",
              color: 'black',
              transitionDuration: '1s ,0.5s'
            }
          }}
          href={props.locationOnMap}
        >
          ¿COMÓ LLEGAR?
        </Button>
      </Box>


      <CarruselMultiple images={props.carruselImages}></CarruselMultiple>

      <Box sx={{ backgroundColor: props.colorPrimary, p: '50px', pt: '100', pb: '100' }} className="content-datos">
        <Grid container>
          <Grid
            xs={6}
            item
            sx={{
              textAlign: "center",
              color: "black",
              borderRight: "solid black 2px",
            }}
            className="content-asistencia-cena"
          >
            <Typography variant="h3" component="h2" fontSize={40}fontFamily={props.tipography}fontWeight={600} className="asistencia astensiaAcena">
              Asistencia a la cena
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: props.colorSecundary,
                color: "white",
                borderRadius: "20px",
                width: "50%",
                margin: 1,
                ':hover': {
                  backgroundColor: "white",
                  color: 'black',
                  transitionDuration: '1s ,0.5s'
                }
              }}
              className="button-asistencia"
              href={props.beforeDinnerButton}
            >
              CONFIRMAR ASISTENCIA
            </Button>
            <Typography variant="body1" component="h2">
              Cuanta alegría me dará verte ahí.
            </Typography>
          </Grid>
          <Grid
            xs={6}
            item
            sx={{
              textAlign: "center",
              color: "black",
              borderLeft: "solid black 2px",
            }}
            className="content-asistencia-brindis"
          >
            <Typography variant="h3" component="h2" fontSize={40} fontFamily={props.tipography} fontWeight={600} className="asistencia">
              Asistencia después de cena
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor:props.colorSecundary,
                color: "white",
                borderRadius: "20px",
                width: "50%",
                margin: 1,
                ':hover': {
                  backgroundColor: "white",
                  color: 'black',
                  transitionDuration: '1s ,0.5s'
                }
              }}
              className="button-asistencia"
              href={props.afterDinnerButton}
            >
              CONFIRMAR ASISTENCIA
            </Button>
            <Typography variant="body1" component="h2" className="text">
              Cuanta alegría me dará verte ahí.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container sx={{ textAlign: "center", backgroundColor: props.colorSecundary, pt: '50px', pb: '50px' }}>
          <Grid item xs={4}>
            <Box>
              <Image
                src={IconDatos}
                alt={"EventUp"}
                style={{ width: "25%", height: "25%" }}
                className="img-regalo"
              ></Image>
              <Typography variant="h3" component="h2" fontFamily={props.tipography} pb={2} fontSize={26} className="datos"
              >
                Datos útiles
              </Typography>
              <BasicModal  width="80%" text={'¿DÓNDE ME PUEDO ALOJAR?'} buttonAction={true} dataTitle={"HOTELES"} dataDescription={props.hotels} fontSize={'12px'} ></BasicModal>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Image
                src={IconDressCode}
                alt={"EventUp"}
                style={{ width: "25%", height: "25%" }}
                className="img-regalo"
              ></Image>
              <Typography variant="h3" component="h2" fontFamily={props.tipography} pb={2} fontSize={26} className="datos">
                Dress code
              </Typography>
              <Button variant="contained" sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "20px",
                width: "80%",
                fontSize: '12px',
                fontWeight: 900,
                boxShadow: 'none',
                ':hover': {
                  backgroundColor: props.colorPrimary
                }
              }}
                className="data-button">
                {props.dressCode}
              </Button>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Image
                src={IconSpotify}
                alt={"EventUp"}
                style={{ width: "25%", height: "25%" }}
                className="img-regalo"
              ></Image>
              <Typography variant="h3" component="h2" fontFamily={props.tipography} pb={2} fontSize={26} className="datos">
                Spotify
              </Typography>
              <Button variant="contained" sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "20px",
                width: "80%",
                fontSize: '12px',
                fontWeight: 900,
                boxShadow: 'none',
                ':hover': {
                  backgroundColor: props.colorPrimary
                }
              }}
                className="data-button"
                href={props.spotify}>
                ¿QUÉ CANCIONES NO PUEDEN FALTAR EN LA FIESTA?{" "}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            style={{ textAlign: "center", position: "relative" }}
            className="instagram"
          >
            {" "}
            <Image
              src={props.imageInstagram}
              alt={"EventUp"}
              style={{ height: "105vh", width: "100%", objectFit: "cover" ,filter:'brightness(0.8)'}} />
            <Box marginTop={"-60vh"} pb={"0vh"} className={"insta-content"} sx={{filter:'brightness(1)'}}>
              <Instagram sx={{ fontSize: '100px' }}></Instagram>
              <Typography variant="h3" component="h2" className="text" fontFamily={props.tipography}>
                {props.arrobaInstagram}
              </Typography>
              <Typography variant="h3" component="h2" fontSize={18} pb={2} className="text">
                ¡Preparate para esta gran fiesta!<br />
                Seguime en mi cuenta de instagram y etiquetame en tus fotos y videos.
              </Typography>
              <Button variant="contained"  sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "20px",
                width: "40%",
                fontWeight: 900,
                ':hover': {
                  backgroundColor: "white",
                  color: 'black',
                  transitionDuration: '1s ,0.5s'
                }
              }} href={props.urlInstagram}>VER INSTAGRAM</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ backgroundColor: props.colorSecundary, textAlign: "center", p: '120px' }} className="regalo">
        <Image
          src={IconRegalo}
          alt="EventUp"
          style={{ width: "10%", height: "10%" }}
          className="img-regalo"
        ></Image>
        <Typography variant="h3" component="h2" fontFamily={props.tipography} fontSize={40} className="text-regalo">
          Si deseás regalarme algo podés colaborar con mis sueños y anhelos
        </Typography>
        <Typography variant="body1" component="h2" fontSize={20} m={1} className="text-regalo" fontFamily={props.tipography}>
          Te comparto mi alias para que transfieras
        </Typography>
        <BasicModal width="50%" text={"Transferir"} buttonAction={true} dataDescription={props.alias} dataTitle="ALIAS:"></BasicModal>
      </Box>
      <Box sx={{ color: "black", textAlign: "center", pt: 7, pb: 7 }} className="footer">
        <Typography variant="body1" component="h2" className="text-regalo" fontFamily={props.tipography}>
          Ante cualquier consulta
        </Typography>
        <Typography variant="h4" component="h2" margin={1} fontWeight={900} className="text-regalo" fontFamily={props.tipography}>
          {props.phone}
        </Typography>
        <Typography variant="h6" component="h2" fontWeight={600} className="text-regalo-footer">
          {props.email}
        </Typography>
      </Box>

      <Box bgcolor={'black'} p={'5px'}>
        <Grid container>
          <Grid item xs={4}>
            <Typography variant='h5' component="h2" textAlign={'start'} fontSize={'12px'}><Link href="https://eventup.com.ar/" color='#ffffff'>EventUp.com.ar</Link></Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant='h6' component="h2" textAlign={'center'} fontSize={'12px'}>Derechos reservados</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant='h6' component="h2" textAlign={'end'} fontSize={'12px'}>powered by <Link href="https://socialup.com.ar/" color='#ffffff'> Social Up</Link></Typography>
          </Grid>
        </Grid>
      </Box>
    </div></>
  );
};
