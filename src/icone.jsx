import icone01d from "./wethers_icone/icone01d.png";
import icone02d from "./wethers_icone/icone02d.png";
import icone03d from "./wethers_icone/icone03d.png";

import icone04d from "./wethers_icone/icone04d.png";
import icone09d from "./wethers_icone/icone09d.png";
import icone10d from "./wethers_icone/icone10d.png";

import icone11d from "./wethers_icone/icone11d.png";
import icone13d from "./wethers_icone/icone13d.png";
import icone50d from "./wethers_icone/icone50d.png";

import icone01n from "./wethers_icone/icone01n.png";
import icone02n from "./wethers_icone/icone02n.png";
import icone03n from "./wethers_icone/icone03n.png";

import icone04n from "./wethers_icone/icone04n.png";
import icone09n from "./wethers_icone/icone09n.png";
import icone10n from "./wethers_icone/icone10n.png";

import icone11n from "./wethers_icone/icone11n.png";
import icone13n from "./wethers_icone/icone13n.png";
import icone50n from "./wethers_icone/icone50n.png";

import { useContext } from "react";
import { IPContext } from "./context/contextIP.jsx";

export default function Icone() {
  const {weather} = useContext(IPContext)
  const weatherIcone = {
    "01d": icone01d,
    "02d": icone02d,
    "03d": icone03d,

    "04d": icone04d,
    "09d": icone09d,
    "10d": icone10d,

    "11d": icone11d,
    "13d": icone13d,
    "50d": icone50d,

    "01n": icone01n,
    "02n": icone02n,
    "03n": icone03n,

    "04n": icone04n,
    "09n": icone09n,
    "10n": icone10n,

    "11n": icone11n,
    "13n": icone13n,
    "50n": icone50n,
  };
  const iconCode = weather?.weather?.[0]?.icon;

  return (
    <>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={weatherIcone[iconCode]} width={140} alt="weather icon" />
      </div>
    </>
  );
}
