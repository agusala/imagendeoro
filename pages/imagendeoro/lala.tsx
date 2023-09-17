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
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import ReactPlayer from "react-player";
import Image from "next/image";
import SemiCirculo from "../../public/semiCirculo.png";
import fondoCinta from "../../public/steph invitacin digital 02_Mesa de trabajo 1 copia (1).png";
import fondo from "../../public/invitacion fondo celu_Mesa de trabajo 1 (1).png";
import {
  IData,
  SectionEventData,
} from "@/shared/components/sectionEventData/sectionEventData";
import IFooter from "../../src/shared/components/footer/footer";
import React, { useEffect, useState } from "react";
import "./stephanie.css";
import Link from "next/link";
import BasicModal from "@/shared/components/modal/modal";
import { on } from "events";
function Stephanie() {
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
    let difference = +new Date(`09/16/${year}`) - +new Date();

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
  return (
    <div style={{ backgroundColor: "black" }}>
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
      {/* <Grid container spacing={3}>
            <Grid item xs={3}> 

            </Grid>
            <Grid item xs={6}> 
              <ReactPlayer 
              url={''}
              playing={true}
              loop={true}
              controls={true}
              />
            </Grid>
            <Grid item xs={3}>

            </Grid>
        </Grid> */}
      {/* <Box 
      className="fondoCinta contentHeader"
        sx={{ flexGrow: 1, textAlign: "center", height: 200, m: "auto",paddingTop:'10vh', zIndex:200}}
      >
        <Typography variant="h1" component="h1" gutterBottom className="fontPrimary title" sx={{color: "white"}} >
          GOLD LINE
        </Typography>
        <Typography variant="h4" component="h4" gutterBottom className="fontSecundary" sx={{color: "white"}}>
          SkinCare presentation
        </Typography>
      </Box>
      <Box width={'100%'} height={'100%'} marginTop={'-62vh'} className="contentImg"> 
      <Image src={fondoCinta} alt="Picture of the author" style={{width:'130%',height:'50%',marginLeft:'-15%'}}/>
      </Box> */}
      <Box className="contentImg">
        <Image
          src={fondoCinta}
          alt="Picture of the author"
          style={{ width: "100%", height: "50%" }}
        />
      </Box>
      <Box className="contentImg1">
        <Image
          src={fondo}
          alt="Picture of the author"
          style={{ width: "100%", height: "50%" }}
        />
      </Box>
      <Box
        sx={{ textAlign: "center", p: "1rem", mt: "1 em" }}
        className="content-tempo"
      >
        <Typography
          variant="h3"
          component="h2"
          fontSize={30}
          className="fontSecundary"
        >
          {timeLeft.llego == "" ? "MISSING" : ""}
        </Typography>
        <Typography
          variant="h1"
          component="h2"
          fontSize={70}
          className="number-tempo"
          fontFamily={"fontPrimary"}
        >
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
      <Grid
        container
        spacing={0}
        textAlign={"center"}
        alignItems={"center"}
        justifyContent={"center"}
        zIndex={20}
        className="containerGrid"
      >
        <Grid
          item
          xs={3}
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          zIndex={20}
          className="grid"
        >
          {" "}
          <Image
            src={SemiCirculo}
            alt="Picture of the author"
            width={200}
            height={130}
            style={{}}
          />
          <Card
            sx={{
              maxWidth: 260,
              m: "auto",
              bgcolor: "black",
              border: 0.5,
              borderColor: "white",
              borderRadius: "10px",
              height: 200,
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
              Schedule
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white" }}
              className="fontCard"
            >
              Saturday, Sep 16th at 7:30p.m.
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
                    <b> Special Note:</b>
                  </u>
                  We would like to gently inform our guests that this is an
                  adults-only event. We appreciate your understanding.
                  <br />
                  <u>
                    <b>Event Schedule:</b>
                  </u>{" "}
                  The event venue will open its doors at 7:30 PM to welcome our
                  guests. The main program will commence promptly at 8:00 PM. We
                  recommend arriving early to fully enjoy the experience.
                  {<br />}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  variant="body1"
                  component="h2"
                  sx={{ mt: 2 }}
                  color={"black"}
                >
                  We are excited to share this special event with you. Thank you
                  for being part of it!
                </Typography>
              </Box>
            </Modal>
          </Card>
        </Grid>
        <Grid
          item
          xs={3}
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          zIndex={20}
          className="grid"
        >
          <Image
            src={SemiCirculo}
            alt="Picture of the author"
            width={200}
            height={130}
            style={{
              zIndex: -100,
            }}
          />
          <Card
            sx={{
              maxWidth: 260,
              m: "auto",
              bgcolor: "black",
              border: 0.5,
              borderColor: "white",
              borderRadius: "10px",
              height: 200,
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
              Location
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "white", paddingLeft: "5%", paddingRight: "5%" }}
              className="fontCard"
            >
              800 Silks Run #1350, Hallandale Beach, FL 3300 9 in front of
              bowling
            </Typography>
            <Button
              variant="contained"
              href="https://maps.app.goo.gl/otKg2q2s1iPJAhfLA?g_st=iw"
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
                  backgroundColor: "white",
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
        <Grid
          item
          xs={3}
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          zIndex={20}
          className="grid"
        >
          <Image
            src={SemiCirculo}
            alt="Picture of the author"
            width={200}
            height={130}
            style={{
              zIndex: -100,
              textAlign: "center",
              margin: "auto",
            }}
          />
          <Card
            sx={{
              maxWidth: 260,
              m: "auto",
              bgcolor: "black",
              border: 0.5,
              borderColor: "white",
              borderRadius: "10px",
              height: 200,
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
                ¡GALA NIGHT!
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "white", m: "auto", marginTop: "1.5em" }}
              >
                Black, White & Gold
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
                  We kindly request all attendees to embrace a{" "}
                  {'"Sweet Elegance"'} dress code for our event.{<br />}
                  <u>
                    <b>For Men:</b>
                  </u>{" "}
                  Formal attire is required, and we encourage gentlemen to wear
                  elegant tuxedos or suits.{<br />}
                  <u>
                    <b>For Women:</b>
                  </u>{" "}
                  Ladies, we invite you to grace the occasion in beautiful,
                  floor-length dresses that exude elegance and charm. Embrace
                  your sweet side and let your outfits reflect the beauty of the
                  evening.{<br />}
                  We look forward to sharing this special event with you in a
                  celebration of sweet style and elegance.
                </Typography>
              </Box>
            </Modal>
          </Card>
        </Grid>

        <Paper
          className="fondoCard"
          sx={{
            p: 10,
            margin: "20px",
            width: "80%",
            marginTop: "-20vh",
            zIndex: 2,
            marginBottom: "5%",
          }}
        />
      </Grid>
      <Box textAlign={"center"} m={"auto"}>
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
          }}
          className="fontCard2"
        >
          i want to confirm
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
export default Stephanie;
