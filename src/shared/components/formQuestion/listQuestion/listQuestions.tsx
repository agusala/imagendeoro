import React, { useState } from "react";
import { IQuestion } from "../model/question";
import { ListItems } from "../../list/list";
import { ItemQuestion } from "../itemQuestion/itemQuestion";
import { deleteQuestion, getQuestions } from "../question-service/question";



export const ListQuestion = () => {
  const[questions,setQuestion]= useState<[]>([])
  
    const action = (item: IQuestion) => {
      deleteQuestion(item.question)
    };
    
    getQuestions().then((docSnap)=>{
      let data:any =[]
      docSnap.forEach((doc) => {
       
        data.push(doc.id);
      });
      setQuestion(data)
    })
  
    return (  
      <div>
        <ListItems
          items={questions}
          renderItem={ItemQuestion}
          handleItemClick={(item: IQuestion) => {
           action(item)
          }}
        ></ListItems>
      </div>
    );
  };
  