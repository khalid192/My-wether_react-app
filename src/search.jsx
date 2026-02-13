import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useContext,useEffect } from "react";
import { IPContext } from "./context/contextIP.jsx";

export default function Search() {
  const { setAddress, lung, setOpen, weather } = useContext(IPContext);
  const [city, setCity] = useState("");

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleClick() {
  
  
    if (!city.trim()) {
      setOpen((i) => ({
        ...i,
        open: true,
        Title:
          lung === "en"
            ? "Please enter a city or country name"
            : "يرجى إدخال اسم المدينة أو الدولة",
        severity: "error",
      }));
      return;
    }
  
  
    setAddress(city);
    setCity("");
  }
  
  useEffect(() => {
  if (!weather) return;

  if (weather.cod === "404") {
    setOpen((i) => ({
      ...i,
      open: true,
      Title:
        lung === "en"
          ? "City not found or not recognized"
          : "لم يتم العثور على المدينة أو لم يتم التعرف عليها",
      severity: "error",
    }));
  }
  if (weather.cod === 200) {
    setOpen((i) => ({
      ...i,
      open: true,
      Title:
        lung === "en"
          ? "Weather loaded successfully"
          : "تم تحميل حالة الطقس بنجاح",
      severity: "success",
    }));
  }

}, [weather]);





  const dr = lung === "en" ? "ltr" : "rtl";
  const dm = lung === "en" ? "write a city" : "اكتب اسم المدينة";

  return (
    <div style={{ display: "flex" }}>
      <TextField
        label={dm}
        variant="standard"
        size="small"
        sx={{
          mb: 2,
          width: "100%",
          direction: dr,
          ml: 0.5,
          "& .MuiInputLabel-root": {
            right: lung === "ar" ? 0 : "auto",
            left: lung === "ar" ? "auto" : 0,
            transformOrigin: lung === "ar" ? "top right" : "top left",
          },
        }}
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
