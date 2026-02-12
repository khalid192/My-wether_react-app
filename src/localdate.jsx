
import { Typography } from "@mui/material";
import {useContext} from "react"
import {IPContext} from "./context/contextIP.jsx"


export default function Localdate() {

const {weather} = useContext(IPContext)

    const today= new Date();
    const Month=today.getMonth()+1;
    const Day=today.getDate();
    const Year=today.getFullYear();

  const date=`${Day} / ${Month} / ${Year}`;


    
  return (

     <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <Typography variant="h7">{weather?.sys?.country  ||null} {weather?.name || "Location Unknown"} </Typography>
          <Typography variant="h9">{date}</Typography>
          </div>
  )
}