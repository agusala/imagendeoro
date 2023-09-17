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
import LogoIOColor from "../../public/logoImagenDeOroDorado.png";
import Image from "next/image";
import { url } from "inspector";

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
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const imgURL = "../../public/abstract-water-gold-1283722.jpg";
  return (
    <div>
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
          {"WELCOME"}
        </DialogTitle>
        <DialogContent style={{ backgroundColor: "#f4e0d3" }}>
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
              see invitation
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
      <Box sx={{ backgroundColor: "black" }}>
        <Grid
          container
          textAlign={"center"}
          className="content-header"
          sx={{
            backgroundColor: "#ffd700",
            opacity: 0.7,
            flexGrow: 1,
            textAlign: "center",
            height: 400,
            m: "auto",
            paddingTop: "0vh",
          }}
        >
          <Image
            src={LogoIOColor}
            alt="Picture of the author"
            style={{ width: "50vh", height: "50vh", margin: "auto" }}
          />
        </Grid>
        <Box textAlign="center"
        height={200} m="auto" mt={6}>
          <Typography variant="h3" component="h2" fontSize={30} className="">
            {timeLeft.llego == "" ? "SE ACERCA EL EVENTO" : ""}
          </Typography>
          <Typography variant="h1" component="h2" fontSize={70} className="">
            {timeLeft.llego == ""
              ? timeLeft.days +
                "D : " +
                timeLeft.hours +
                "H : " +
                timeLeft.minutes +
                "M : " +
                timeLeft.second +
                "S"
              : timeLeft.llego}
          </Typography>
        </Box>
      </Box>
      <Grid container justifyContent="center" spacing={3} bgcolor={"black"}>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              backgroundColor: "black",
              border: 0,
              borderRadius: "10px",
              height: 200,
              maxWidth: 260,
              m: "auto",
              bgcolor: "black",
              borderColor: "white",
              marginTop: "-1%",
              padding: "2%",
            }}
            className="card"
          >
            <Typography
              variant="h4"
              component="div"
              gutterBottom
              sx={{ color: "white" }}
              className="fontCard2"
            >
              Fecha Evento
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white" }}
              className="fontCard"
            >
              Sabado, Oct 07 - 08:00p.m.
            </Typography>
            <Button
              onClick={handleOpen1}
              variant="contained"
              sx={{
                fontWeight: "900",
                bgcolor: "white",
                color: "black",
                textTransform: "none",
                width: "90%",
                position: "relative",
                top: "34%",
                fontSize: "1em",
                ":hover": {
                  backgroundColor: "white",
                  color: "black",
                  width: "95%",
                  height: "25%",
                },
              }}
              className="fontCard2"
            >
              more info
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
                  sx={{ mt: 2 }}
                  color={"black"}
                >
                  <u>
                    <b> Importante:</b>
                  </u>
                  Nos gustaría informar amablemente a nuestros invitados que
                  este es un evento solo para adultos.
                  <br />
                  <u>
                    <b>Cronograma del evento:</b>
                  </u>{" "}
                  El recinto del evento abrirá sus puertas a las 20:00 horas
                  para recibir a nuestros invitados. El programa principal
                  comenzará puntualmente a las 8:30 p.m. Nosotros Recomendamos
                  llegar temprano para disfrutar plenamente de la experiencia.
                  Cualquier duda contactenos por nuestros canales
                  -correo:la.imagendeoro@gmail.com -tel:3571564671
                  <br />
                </Typography>
                <Typography
                  id="modal-modal-description"
                  variant="body1"
                  component="h2"
                  sx={{ mt: 2 }}
                  color={"black"}
                >
                  Estamos emocionados de compartir este evento especial con
                  usted. Gracias por ser parte de ello!
                </Typography>
              </Box>
            </Modal>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              backgroundColor: "black",
              border: 0,
              borderRadius: "10px",
              height: 200,
              maxWidth: 260,
              m: "auto",
              bgcolor: "black",
              marginTop: "-1%",
              padding: "2%",
            }}
            className="card"
          >
            <Typography
              variant="h4"
              component="div"
              gutterBottom
              sx={{ color: "white" }}
              className="fontCard2"
            >
              Ubaicacion
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "white", paddingLeft: "5%", paddingRight: "5%" }}
              className="fontCard"
            >
              O'clock Eventos
            </Typography>
            <Button
              variant="contained"
              href="https://maps.app.goo.gl/XhZci374BsKoTJ3d9"
              sx={{
                fontWeight: "900",
                bgcolor: "white",
                color: "black",
                textTransform: "none",
                width: "90%",
                position: "relative",
                top: "15%",
                fontSize: "1em",
                ":hover": {
                  color: "black",
                  width: "95%",
                  height: "25%",
                },
              }}
              className="fontCard2"
            >
              map
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              backgroundColor: "black",
              border: 0,
              borderRadius: "10px",
              height: 200,
              maxWidth: 260,
              m: "auto",
              bgcolor: "black",
              zIndex: 30,
              marginTop: "-1%",
              padding: "2%",
            }}
            className="card"
          >
            <Box textAlign={"center"}>
              <Typography
                variant="h4"
                component="div"
                gutterBottom
                sx={{ color: "white", m: "auto" }}
                className="fontCard2"
              >
                Dress Code
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  m: "auto",
                  fontSize: "1.5em",
                  marginTop: "1em",
                }}
                className="fontCard"
              >
                ¡Noche de Gala!
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "white", m: "auto", marginTop: "1.5em" }}
              >
                Elegante
              </Typography>
            </Box>
            <Button
              onClick={handleOpen}
              variant="contained"
              sx={{
                fontWeight: "900",
                bgcolor: "white",
                color: "black",
                textTransform: "none",
                width: "90%",
                position: "relative",
                top: "3%",
                fontSize: "1em",
                ":hover": {
                  backgroundColor: "white",
                  color: "black",
                  width: "95%",
                  height: "25%",
                },
              }}
              className="fontCard2"
            >
              more info
            </Button>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="modal-modal-title"
                  variant="h5"
                  component="h2"
                  color={"black"}
                >
                  <u>
                    <b> Dress Code: Sweet Elegance</b>
                  </u>
                </Typography>
                <Typography
                  id="modal-modal-description"
                  variant="body1"
                  component="h2"
                  sx={{ mt: 2 }}
                  color={"black"}
                >
                  Nos complace invitarlos a nuestro próximo evento, donde la
                  elegancia será la clave, pero sin la necesidad de adoptar un
                  enfoque extremadamente formal. Queremos que todos se sientan
                  cómodos y a la moda mientras disfrutan de una velada especial.
                  {<br />}
                  <u>
                    <b>Para Hombres:</b>
                  </u>{" "}
                  Les pedimos que opten por un atuendo elegante, pero sin
                  necesidad de usar esmoquin o trajes formales. Un buen traje
                  con una camisa de vestir será perfecto. También pueden
                  considerar un blazer con pantalones de vestir y una corbata
                  elegante. La idea es lucir sofisticados sin sentirse demasiado
                  rígidos.{<br />}
                  <u>
                    <b>Para Mujeres:</b>
                  </u>{" "}
                  Les invitamos a lucir su estilo y elegancia personal. Vestidos
                  hermosos hasta la rodilla o pantalones con blusas elegantes
                  son opciones fantásticas. Sientan la libertad de añadir toques
                  de glamour con accesorios llamativos o joyas deslumbrantes. La
                  idea es sentirse glamorosas y seguras de sí mismas.{<br />}
                  Esperamos compartir este evento especial con todos ustedes en
                  una atmósfera elegante pero relajada, donde la moda se
                  encuentra con la comodidad y la diversión. ¡Estamos ansiosos
                  por verlos y pasar un tiempo maravilloso juntos!
                </Typography>
              </Box>
            </Modal>
          </Card>
        </Grid>
      </Grid>
      <Box textAlign={"center"} m={"auto"} bgcolor={"black"} height={200} >
        <Button
          onClick={handleOpenForm}
          variant="contained"
          sx={{
            textAlign: "center",
            m: "auto",
            mb: "5%",
            fontWeight: "900",
            bgcolor: "white",
            color: "black",
            textTransform: "none",
            width: "50%",
            position: "relative",
            top: "3%",
            fontSize: "1em",
            ":hover": {
              backgroundColor: "white",
              color: "black",
              width: "52%",
              height: "27%",
            },
            mt: "8%",
          }}
          
          className=""
        >
          Confirmar Asistencia
        </Button>
      </Box>
      <Modal
        open={openForm}
        onClose={handleCloseForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ width: 900, height: "100%" }} className="form">
          <iframe
            className="form2"
            src="https://docs.google.com/forms/d/e/1FAIpQLSf9M83oThvBEK1ie3FMyEYTEBK46KNDzvFXpPyiyix1YwNZgg/viewform?embedded=true"
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
