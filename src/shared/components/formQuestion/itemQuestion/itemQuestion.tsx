import { ListItem, ListItemAvatar, Avatar, ListItemText, IconButton } from '@mui/material'
import React from 'react'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { IQuestion, Preguntas } from '../model/question';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteQuestion } from '../question-service/question';
import { deleteDoc } from 'firebase/firestore';
export const ItemQuestion = (props:string) => {

const deleteColl = (props:any)=>{
  deleteQuestion(props)
} 

  return (
  <>
        <ListItemAvatar>
            <Avatar>
                <QuestionMarkIcon />
            </Avatar>
        </ListItemAvatar>
        <ListItemText style={{color:'white',fontSize:'20px'}} primary={props}  />
        <IconButton onClick={()=>deleteColl(props)} style={{color:'white'}}>
        <DeleteIcon ></DeleteIcon>
</IconButton>
 </>


      

  )
}
