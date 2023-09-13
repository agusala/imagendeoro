import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { IQuestion } from "./model/question";
import { ref, set } from "firebase/database";
import { db } from "@/app/api/firebase";
import { useState } from "react";
import {
  doc,
  collection,
  getDocs,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import './form-question.css'
import footer from '../../../../public/fondo\ web\ \(1\).png'
import { addQuestion } from "./question-service/question";

import { Slider } from "../slider/slider";
function QuestionForm() {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IQuestion>();

  const onSubmit = (data: IQuestion) => {
    addQuestion(data.question,data.question)
    reset()
  };
  

  return (
    <Box className="question" sx={{ display: "flex", flexWrap: "wrap", mt: "5%", p: "3%", alignContent: "center", margin: 'auto' }}>  
        <Card sx={{bgcolor:'#d80032' ,marginBottom: "5px", maxHeight: "500px", maxWidth: "350px", display: "flex", flexWrap: "wrap", mt: "5%", p: "3%", marginTop: '0em !important', marginLeft: 'auto !important', marginRight: 'auto !important' }}>
          <Typography variant="h3" className="title">
            INGRESE SU PREGUNTA
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className="formulario">
            <Controller
              name="question"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  sx={{backgroundColor:'white',color:"black"
                }}
                  label="Escriba su pregunta"
                  error={Boolean(errors.question)}
                  helperText={errors.question ? "This field is required" : null}
                  variant="outlined"
                  fullWidth
                color="info"
                  margin="normal" />
              )} />

            <Button type="submit" variant="contained" fullWidth sx={{color:'#d80032',backgroundColor:'white',margin:"auto",':hover':{
              color:'#d80032',backgroundColor:'#f1f1f1'
            }}}>
              Enviar
            </Button>
          </form>
        </Card>
      </Box>
   
  );
}
export default QuestionForm;