
import { Box, Card, CardContent, } from "@mui/material";


import Search from "./search";
import Localdate from "./localdate";
import Description from "./description";

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

             <Search />
            
             <Localdate />

              <Description /> 
        </CardContent>
      </Card>
    </Box>
    </>
  )
}

export default App
