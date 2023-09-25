import React from 'react'
import Confetti from 'react-confetti'
interface promp{
    ativated:boolean
}
export const ConfettiComponent = (props:promp) => {
   const widht = window.screen.width
   const height= window.screen.height
  return (
    <div>
<Confetti
      width={widht}
      height={1600}
      numberOfPieces={
    2000
    }
      friction={0.5}
      wind={0}
      gravity={2.5}
      colors={['#FFFFFF','#aaaaaa', '#ffc34a','#efb810']}
      run={props.ativated}
     

 
/>
    </div>
  )
}
