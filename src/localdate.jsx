
import { Typography } from "@mui/material";
import {useContext} from "react"
import {IPContext} from "./context/contextIP.jsx"


export default function Localdate() {

const {weather} = useContext(IPContext)


    const Month=new Date().getMonth()+1;
    const Day=new Date().getDay()+1;
    const Year=new Date().getFullYear();
  const date=`${Day} / ${Month} / ${Year}`;
    
  return (

     <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <Typography variant="h7">{weather?.name||"Location Unknown"}</Typography>
          <Typography variant="h9">{date}</Typography>
          </div>
  )
}