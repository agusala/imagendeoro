/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  Card,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Link,
  Modal,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LogoIOColor from "../../public/premioimagendeoro.png";
import FondoHeader from "../../public/cinta1.jpg";
import Pintura from "../../public/pintura.png";
import Disco from "../../public/circuloDorado.png";
import PolvoDorado from "../../public/PolvoDorado.png";
import Dorado from "../../public/pintura.png";
import Luces from "../../public/luces.jpg";
import Cinta from "../../public/cinta.png";
import Image from "next/image";
import { url } from "inspector";
import "./imagendeoro.css";

function ImagenDeOro() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [openForm, setOpenForm] = React.useState(false);
  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  const [openModal, setOpenModal] = React.useState(true);
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`10/07/${year}`) - +new Date();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      second: 0,
      llego: "",
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        second: Math.floor((difference / 1000) % 60),
        llego: "",
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        second: 0,
        llego: "THE DAY HAS ARRIVED",
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const handleCloseModal = () => {
    setOpenModal(false);
    const audio = new Audio("audio/music-fondo.mp3");
    audio.play();
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#070707",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const imgURL = "../../public/abstract-water-gold-1283722.jpg";
  return (
    <div style={{ backgroundColor: "#070707" }}>
      <Dialog
        open={openModal}
        keepMounted
        onClose={handleCloseModal}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          width={250}
          bgcolor={"black"}
          color={"white"}
          textAlign={"center"}
          className="title-modal"
        >
          {"BIENVENIDO"}
        </DialogTitle>
        <DialogContent style={{ backgroundColor: "rgba(229, 166, 94)" }}>
          <DialogContentText
            id="alert-dialog-slide-description"
            textAlign={"center"}
          ></DialogContentText>
          <DialogActions>
            <Button
              style={{
                backgroundColor: "black",
                color: "white",
                margin: "auto",
              }}
              onClick={handleCloseModal}
            >
              VER INVITACIÓN
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <Box bgcolor={"black"} p={"5px"}>
        <Grid container>
          <Grid item xs={4}>
            <Typography
              variant="h5"
              component="h2"
              textAlign={"start"}
              fontSize={"12px"}
            >
              <Link href="https://eventup.com.ar/" color="#ffffff">
                EventUp.com.ar
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="h6"
              component="h2"
              textAlign={"center"}
              fontSize={"12px"}
            ></Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="h6"
              component="h2"
              textAlign={"end"}
              fontSize={"12px"}
            >
              powered by{" "}
              <Link href="https://socialup.com.ar/" color="#ffffff">
                {" "}
                Social Up
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: "#070707",
        }}
      >
        <Grid
          container
          textAlign={"center"}
          className="content-header"
          sx={{
            flexGrow: 1,
            textAlign: "center",
            height: 500,
            m: "auto",
            paddingTop: "0vh",
            zIndex:200
          }}
        >
          <Image
            src={LogoIOColor}
            alt="Picture of the author"
            style={{
              width: "30em",
              height: "15em",
              margin: "auto",
              zIndex: 10,
            }}
            className="logo"
          />
        </Grid>
        <Grid
          container
          textAlign={"center"}
          
          sx={{
            flexGrow: 1,
            textAlign: "center",
            height: 400,
            m: "auto",
            paddingTop: "0vh",
            zIndex:-1
          }}
        >
          <Image
            src={FondoHeader}
            alt="Picture of the author"
            style={{
              width: "100%",
              height: "100%",
              margin: "-8em auto auto auto",
              zIndex: 10,
            }}
            className="imagenDorada"
          />
        </Grid>
        
        <Box textAlign="center" height={200} mt={'-8em'} className="content-tempo" zIndex={200}>
          <Typography
            variant="h3"
            component="h2"
            fontSize={30}
            color={'white'}
            className="title-tempo"
          >
            {timeLeft.llego == "" ? "SE ACERCA EL EVENTO" : ""}
          </Typography>
          <Grid
          className="content-number-tempo"
            container
            spacing={3}
            sx={{
              height: "30vh",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={2.2}
              sm={1.5}
              sx={{
                backgroundImage: `url(${Luces.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                border: "solid 3px white",
                borderRadius: "5px",
                m: "10px",
                pl: "0px!important",
                pt: "0px!important",
              }}
            >
              <Typography variant="h1" component="h2" className="tempo" color={'white'}> 
                {" "}
                { timeLeft.days + "D" }
              </Typography>
            </Grid>
            <Grid
              item
               xs={2.2}
              sm={1.5}
              sx={{
                backgroundImage: `url(${Luces.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                border: "solid 3px white",
                borderRadius: "5px",
                m: "10px",
                pl: "0px!important",
                pt: "0px!important",
              }}
            >
              <Typography variant="h1" component="h2" className="tempo" color={'white'}>
                {" "}
                { timeLeft.hours + "H" }
              </Typography>
            </Grid>
            <Grid
              item
               xs={2.2}
              sm={1.5}
              sx={{
                backgroundImage: `url(${Luces.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                border: "solid 3px white",
                borderRadius: "5px",
                m: "10px",
                pl: "0px!important",
                pt: "0px!important",
              }}
            >
              <Typography variant="h1" component="h2" className="tempo" color={'white'}> 
                {" "}
                { timeLeft.minutes + "M" }
              </Typography>
            </Grid>
            <Grid
              item
               xs={2.2}
              sm={1.5}
              sx={{
                backgroundImage: `url(${Luces.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                border: "solid 3px white",
                borderRadius: "5px",
                m: "10px",
                pl: "0px!important",
                pt: "0px!important",
              }}
            >
              <Typography variant="h1" component="h2" className="tempo" color={'white'}>
                {" "}
                { timeLeft.second + "S"}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Typography
            variant="h3"
            component="h2"
            fontSize={30}
            className="title-date"
            mt={''}
            textAlign={'center'}
            color={'white'}
            
          >
            ¿ESTÁS LISTO?
          </Typography>
      <Grid
        container
        justifyContent="center"
        spacing={6}
        bgcolor={"#070707"}
        mt="7% "
        className="gridContent"
      >
        <Grid
          item
          xs={12}
          sm={3}
          className="contentCard1"
          pl="0px!important"
          pt="0px!important"
          height={"12em"}
        >
          <Image src={Disco} alt={""} style={{
            width:"100%",
            height:"110%",
            marginBottom:'-5em'
          }}
          className="fondoDorado" />
          <Card
            className="card"
            sx={{
              backgroundColor: "#111111",
              color: "white",
              textAlign: "center",
              m: "10%",
              height: "100%",
              position: "relative",
              p:'1em'
            }}
          >
            <Typography
              variant="h4"
              component="div"
              gutterBottom
              className="titleCard"
            >
              Fecha Evento
            </Typography>
            <Typography variant="h6" className="descriptionCard" >
              Sabado, Oct 07 - 08:00p.m.
            </Typography>
            <Button
              onClick={handleOpen1}
              variant="contained"
              className="titleCard buttonCard"
              sx={{
                position: "absolute",
                left: '10px',
                right: '10px',
                bottom: '10px',
                color:'black',
                bgcolor: "#ffc34a",
                border: "solid 3px rgba(255, 255, 255,0.43)",
                borderRadius: "5px",
                ":hover": {
                  bgcolor:'white',
                  color:'black'
                },
              }}
            >
             Ver Más
            </Button>
            <Modal
              open={open1}
              onClose={handleClose1}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="modal-modal-description"
                  variant="body1"
                  component="h2"
                  color='white'
                >
                  <u>
                    <b style={{color:'white'}}> Importante:</b>
                  </u>
                  Nos gustaría informar amablemente a nuestros invitados que
                  este es un evento solo para adultos
                  <br />
                  <br />
                  <b>correo:</b> la.imagendeoro@gmail.com 
                  <br />
                  <b>tel:</b>3571564671
                 
                </Typography>
                <br />
              </Box>
            </Modal>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          className="contentCard2"
          pl="0px!important"
          pt="0px!important"
          height={"12em"}
        >
          <Image src={Disco} alt={""} style={{
            width:"100%",
            height:"110%",
            marginBottom:'-5em'
          }}
          className="fondoDorado" />
          <Card
            className="card"
            sx={{
              backgroundColor: "#111111",
              color: "white",
              textAlign: "center",
              m: "10%",
              height: "100%",
              position: "relative",
              p:'1em'
            }}
          >
            <Typography
              variant="h4"
              component="div"
              gutterBottom
              className="titleCard"
            >
              Ubicación
            </Typography>
            <Typography variant="h6" className="descriptionCard">
              O'clock Eventos
            </Typography>
            <Button
              variant="contained"
              href="https://maps.app.goo.gl/XhZci374BsKoTJ3d9"
              className="titleCard buttonCard"
              sx={{
                position: "absolute",
                left: '10px',
                right: '10px',
                bottom: '10px',
                color:'black',
                bgcolor: "#ffc34a",
                border: "solid 3px rgba(255, 255, 255,0.43)",
                borderRadius: "5px",
                ":hover": {
                  bgcolor:'white',
                  color:'black'
                },
              }}
            >
              Ver Mapa
            </Button>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          className="contentCard3"
          pl="0px!important"
          pt="0px!important"
          height={"12em"}
        >
          <Image src={Disco} alt={""} style={{
            width:"100%",
            height:"110%",
            marginBottom:'-5em'
          }} 
          className="fondoDorado"/>
          <Card
            sx={{
              backgroundColor: "#111111",
              color: "white",
              textAlign: "center",
              m: "10%",
              height: "100%",
              position: "relative",
              p:'1em',              
            }}
            className="card"
          >
            <Box>
              <Typography
                variant="h4"
                component="div"
                gutterBottom
                className="titleCard"
              >
                Dress Code
              </Typography>
              <Typography variant="h6" className="descriptionCard">Elegante</Typography>
            </Box>
            <Button
              onClick={handleOpen}
              variant="contained"
              className="titleCard buttonCard"
              sx={{
                position: "absolute",
                left: '10px',
                right: '10px',
                bottom: '10px',
                color:'black',
                bgcolor: "#ffc34a",
                border: "solid 3px rgba(255, 255, 255,0.43)",
                borderRadius: "5px",
                ":hover": {
                  bgcolor:'white',
                  color:'black'
                },
              }}
            >
              Ver Más
            </Button>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h5" component="h2" color={'white'}>
                  <u>
                    <b> Dress Code: Elegante</b>
                  </u>
                </Typography>
                <Typography
                  id="modal-modal-description"
                  variant="body1"
                  component="h2"
                  sx={{ mt: 2 }}
                  color={"white"}
                >
                  Nos complace invitarlos a nuestro próximo evento, donde la
                  elegancia será la clave.
                  {<br />}
                  <br />
                  <b>correo:</b> la.imagendeoro@gmail.com 
                  <br />
                  <b>tel:</b>3571564671
                 
                </Typography>
                <br />
              </Box>
            </Modal>
          </Card>
        </Grid>
      </Grid>
      <Box textAlign={"center"} m={"auto"} bgcolor={"#070707"}>
        <Button
          onClick={handleOpenForm}
          variant="contained"
          className="titleCard buttonAsistencia"
          sx={{
            textAlign: "center",
            m: "auto",
            mb: "5%",
            fontWeight: "900",
            color: "black",
            textTransform: "none",
            width: "50%",
            position: "relative",
            top: "3%",
            fontSize: "1em",
            bgcolor: "white",
            border: "solid 3px rgba(255, 255, 255,0.43)",
            
            ":hover": {
              backgroundColor: "#ffc34a",
              color: "black",
            },
            mt: "20%",
          }}
        >
          <b>CONFIRMAR ASISTENCIA</b>
        </Button>
      </Box>
      <Modal
        open={openForm}
        onClose={handleCloseForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ width: 900, height: "100%", }} className="form">
          <iframe
            className="form2"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfcHJk7vss47vwQkiOuiiihLNWDTi3RObJ_dCEY-yQvIYu_wA/viewform?embedded=true"
            width="100%"
            height={"100%"}
          >
            Cargando…
          </iframe>
        </Box>
      </Modal>
    </div>
  );
}
export default ImagenDeOro;
