import { useState } from "react";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";
import styled from "styled-components";

// const filter = createFilterOptions();

const cities = [
  { title: "Spain" },
  { title: "Impalaland, United Kingdom" },
  { title: "Philipsburg, Sint Maarten" },
  { title: "Philipsburg, Sint Maarten" },
  { title: "Santander, Spain" },
  { title: "Florence, Italy" },
  { title: "Madrid, Spain" },
  { title: "Pinzolo  , Italy" },
  { title: "Amoopi, Greece" },
  { title: "Vitoria-Gasteiz, Spain" },
  { title: "Florence, Italy" },
  { title: "Eastbourne, United Kingdom" },
  { title: "Florence, Italy" },
  { title: "Mantova, Italy" },
  { title: "Alessandria, Italy" },
  { title: "Milan, Italy" },
  { title: "Palma De Mallorca, Spain" },
  { title: "Essaouira, Morocco" },
  { title: "Portpatrick , United Kingdom" },
  { title: "Portpatrick, United Kingdom" },
  { title: "Castle Douglas, United Kingdom" },
  { title: "MÃ¡laga, Spain" },
  { title: "Lloret De Mar, Spain" },
  { title: "Barcelona, Spain" },
  { title: "Lloret De Mar, Spain" },
  { title: "Barcelona, Spain" },
  { title: "Milan, Italy" },
  { title: "La Molina, Spain" },
  { title: "Bellaria, Italy" },
  { title: "Madrid, Spain" },
  { title: "Milan, Italy" },
  { title: "Barcelona, Spain" },
  { title: "Munich, Germany" },
  { title: "Koblenz, Germany" },
  { title: "Hannover, Germany" },
  { title: "Koblenz, Germany" },
  { title: "Hamburg, Germany" },
  { title: "Vienna, Austria" },
  { title: "Frankfurt , Germany" },
  { title: "Frankfurt, Germany" },
  { title: "Rotterdam, Netherlands" },
  { title: "Berlin, Germany" },
  { title: "Berlin, Germany" },
  { title: "Berlin, Germany" },
  { title: "London, United Kingdom" },
  { title: "Berlin, Germany" },
  { title: "Vienna, Austria" },
  { title: "Cecina Mare , Italy" },
  { title: "Alcudia, Spain" },
  { title: "Buenos Aires, Argentina" },
  { title: "Paris, France" },
  { title: "Astorga, Spain" },
  { title: "Menorca, Spain" },
  { title: "Bariloche, Argentina" },
  { title: "Rome, Italy" },
  { title: "Capoliveri, Italy" },
  { title: "Santadi, Italy" },
  { title: "Fiesole, Italy" },
  { title: "Bari Sardo, Italy" },
];

const WrapperTextField = styled(TextField)`
  /* height: 100000px; */
`;

export function CitySearchBox({ classes, handleOnChange }) {
  // const [value, setValue] = useState("");

  // setTitle(value.title);

  // console.log(value);

  return (
    <Autocomplete
      id="combo-box-demo"
      options={cities}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => (
<TextField
      {...params}
      label="e.g Spain"
      variant="filled"
      onChange={handleOnChange}
    />
      )}
    />
    
  );
}
