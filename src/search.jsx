
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import SearchIcon from '@mui/icons-material/Search';
import { useState , useContext } from 'react';
import {IPContext} from "./context/contextIP.jsx"


export default function Search() {
    
  const {setAddress} = useContext(IPContext)
  const [city, setCity] = useState('');

   function handleChange(e){
    setCity(e.target.value)
   }

   function handleClick(){
    console.log(city);
    setAddress(city)
    setCity('')
    

   }

  return (
    <div style={{ display: "flex" }}>
      <TextField
        label="write a city"
        variant="standard"
        size="small"
        sx={{ mb: 2, width: "100%", ml: 0.5 }}
        onChange={handleChange}
        value={city}
      />
      <Fab 
        aria-label="search"
        size="small"
        sx={{ mb: 2, ml: 1, mt: 0.6, boxShadow: 0, width: 48, height: 40 }}
       onClick={handleClick}
      >
        <SearchIcon />
      </Fab>
    </div>
  );
}
