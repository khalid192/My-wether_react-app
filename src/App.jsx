
import { Box, Card, CardContent, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import SearchIcon from '@mui/icons-material/Search';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import d01 from "./wethers_icone/d01.png"


function App() {

  const sx={
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",    
        height: "100vh" ,
        bgcolor: "#f0f0f0",
      }
  

  return (
    <>
       <Box
      sx={sx}
    >
      <Card sx={{ minWidth: 275, padding: 1, textAlign: "right" }}>

        <CardContent sx={{padding:0}}>

           <div style={{display:"flex"}}>
             <TextField  label="write a city" variant="standard" size='small'sx={{ mb: 2 ,width: "100%",ml:0.5 }} />
             <Fab aria-label="search" size="small" sx={{ mb: 2, ml: 1,mt:0.6 ,boxShadow:0,width:48,height:40}}>
             <SearchIcon />
             </Fab>
           </div>
           <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <Typography variant="h6">riad</Typography>
          <Typography variant="h9">11/21/15</Typography>
          </div>
          <div style={{height:"150px",width:"100%",display:"flex"}}>

            <div style={{flex:1,display:"flex",justifyContent:'center',alignItems:'center'}}>
              <img src={d01} width={140} alt="weather icon" />
            </div>

            <div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",}}>  
              <div style={{display:"flex"}}>

                <Typography style={{flex:0.5,display: "flex",justifyContent: "center",alignItems: "center"}} variant="h2"><WbSunnyRoundedIcon></WbSunnyRoundedIcon></Typography>
                <Typography style={{flex:1,display: "flex",justifyContent: "center",alignItems: "center"}} variant="h2">40 <p style={{fontSize:"15px"}}>°C</p></Typography>
                
              </div>
              <Typography sx={{mr:1}} variant="h7">السماء صافية</Typography>
              <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"}}>
                <Typography sx={{fontSize:"10px"}}>الصغرى:10</Typography>
                -
                <Typography sx={{fontSize:"10px"}}>الكبرى:40</Typography>

              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Box>
    </>
  )
}

export default App
