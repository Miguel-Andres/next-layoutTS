import { FC, } from 'react';

type Props={
  children?:React.ReactNode
}

export  const DarkLayout :FC<Props> = ({children}) =>{
  
  return (
    <div style={{
      backgroundColor:"rgba(50, 181, 189,0.5) " ,
      borderRadius: "30px" ,
      padding :"50px"
      }}>
        <h2 >Dark Layout</h2>
        <div>
        {children}
        </div> 
    </div>
  )
}

