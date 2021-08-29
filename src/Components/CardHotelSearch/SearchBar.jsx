import { makeStyles, Box, Button } from "@material-ui/core";
import { GuestFilter } from "./SearchBar/GuestFilter";
import { CheckInOut } from "./SearchBar/CheckInOut";
import { CitySearchBox } from "./SearchBar/CitySearchBox";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    width: 220,
    height: 20,
    backgroundColor: "white",
    size: "small",
  },
  textFieldCheckin: {
    height: "70px",
    backgroundColor: "white",
  },
  root: {
    display: "flex",
    width: "95%",
    gap: "1rem",
    margin: "1rem auto",
    height: "20p",
    justifyItems: "space-between",
    alignItems: "baseline",
  },
  btn: {
    color: "white",
    borderRadius: "1.75rem",
    height: "2.5rem",
    width: "10rem",
    marginTop: "1rem",
    alignSelf: "baseline",
    fontWeight: "700",
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  const [formData, setFormData] = useState();
  const [value, setValue] = useState({ title: "Spain" });
  // const [checkIn, setCheckIn] = useState();

  

  const handleOnChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  }

  return (
    <Box className={classes.root}>
      <CitySearchBox classes={classes} handleOnChange={handleOnChange} />
      <CheckInOut classes={classes} />
      <GuestFilter />
      <NavLink to={`/search/${value.title}`}>
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          onClick={() => setValue}
        >
          Search
        </Button>
      </NavLink>
    </Box>
  );
}
