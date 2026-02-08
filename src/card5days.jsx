
import { Box, Card, List, } from "@mui/material";
import icone01d from "./wethers_icone/icone01d.png"
import { useContext } from "react";
import { IPContext } from "./context/contextIP.jsx";





export default function Card5days() {
const {weatherForecast,weather} = useContext(IPContext)

if (weather.cod=='200'){
    const list =weatherForecast?.map((i)=>{return i})
    console.log(list)
}


 
return ( 
   <Box  sx={{ padding: 1, textAlign: "right", marginBottom: 2, backdropFilter: "blur(10px)", backgroundColor: "rgba(255, 255, 255, 0.17)", borderRadius: "15px",width:"500px",height:"100px" }}>
     <Card sx={{  backgroundColor: "rgba(183, 179, 179, 0.15)",width: "80px", height: "100%" ,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <img src={icone01d} alt="Weather Icon" style={{ width: "50%" }} />
        <div style={{fontFamily:'Arial, sans-serif',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <p style={{ margin: 0, fontSize: "14px" }}>Mon</p>
            <p style={{ margin: 0, fontSize: "12px" }}>25°C</p>
            <p style={{ margin: 0, fontSize: "10px" }}>broken clouds</p>
             
        </div>
        
     </Card>


   </Box>
   )

}