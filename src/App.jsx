
import { Box, Card, CardContent, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import SearchIcon from '@mui/icons-material/Search';

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
        </CardContent>
      </Card>
    </Box>
    </>
  )
}

export default App
