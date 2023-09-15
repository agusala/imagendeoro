import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LogoIOColor from "../../public/logoImagenDeOroDorado.png";
import Image from "next/image";
import { url } from "inspector";

function ImagenDeOro  () {
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
      <Box sx={{ backgroundColor: "black" }}>
        <Grid container
          textAlign={"center"}
          className="content-header"      
          sx={{
            backgroundColor:"#ffd700",
            opacity: 0.7,
            flexGrow: 1,
            textAlign: "center",
            height: 200,
            m: "auto",
            paddingTop: "0vh",
          }}
        >
          <Image
            src={LogoIOColor}
            alt="Picture of the author"
            style={{ width: "20vh", height: "20vh", margin: "auto" }}
          />
        </Grid>
        <Box>
          <Typography variant="h3" component="h2" fontSize={30} className="">
            {timeLeft.llego == "" ? "SE ACERCA EL EVENTO" : ""}
          </Typography>
          <Typography
            variant="h1"
            component="h2"
            fontSize={70}
            className=""
           
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
      </Box>
    </div>
  );
};
export default ImagenDeOro;
