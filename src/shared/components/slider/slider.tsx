'use client'
import React, { useEffect, useState } from 'react'
import { Box, Button, TextField, Typography } from "@mui/material";
import Image,{ StaticImageData } from "next/image";
import style from './slider.module.css'

export interface ISlider {
  images: StaticImageData[];
  autoPlay?: boolean;
  showButtons?: boolean;
  logo?: string;
  title?: string[];
}


export const Slider = (props: ISlider) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(props.images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (props.autoPlay || !props.showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, props.images);
      }, 2000);
      return () => clearInterval(interval);
    }
  });

  const selectNewImage = (
    index: number,
    images: StaticImageData[],
    next = true
  ) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, props.images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, props.images);
  };
  return (
    <Box>
      <Image
        src={selectedImage}
        alt="SocialUp"
        className={loaded ? "loaded" : ""}
        onLoad={() => setLoaded(true)}
        style={{
          maxWidth: "100%",
          width: "100%",
          objectFit: "cover",
          height: "100%",
          transition: "1s",
          position: "relative",
          display: "inline-block",
          margin: "0%",
          padding: "0%",
        }}
      />
      <Typography variant="h1" component="h2" className={style.title}>{props.title} </Typography>
      <Box className={style.buttonContainer}>
      {props.showButtons ? (
          <>
            <Button  className={style.button} onClick={previous}>{"<"}</Button>
            <Button  className={style.button}onClick={next}>{">"}</Button>
          </>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

