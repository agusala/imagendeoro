import { ListQuestion } from '@/shared/components/formQuestion/listQuestion/listQuestions'
import { Slider } from '@/shared/components/slider/slider'
import { Box } from '@mui/material'
import React from 'react'
import Slider1 from '../../public/SLIDERS WEB 02-02 (1).png'
import Slider2 from '../../public/SLIDERS WEB 02-03 (1).png'
import Slider3 from '../../public/SLIDERS WEB 02-01 (1).png'
import Slider1Cel from '../../public/SLIDERS WEB_Mesa de trabajo 1.png'
import Slider2Cel from '../../public/SLIDERS WEB-02.png'
import Slider3Cel from '../../public/SLIDERS WEB-03.png'
import './questionList.css'
export default function QuestionListPage(){
  return (
    <div>
        {/* <Box className={"slider1"}>
        <Slider images={[Slider1, Slider2, Slider3]} autoPlay={true} showButtons={false} />
      </Box><Box className={"slider2"}>
          <Slider images={[Slider1Cel, Slider2Cel, Slider3Cel]} autoPlay={true} showButtons={false} />
        </Box> */}
      <ListQuestion ></ListQuestion></div>
  )
}
