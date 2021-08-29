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
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: 220,
    height: 10,
    backgroundColor: "white",
    size: "small",
  },
  root: {
    display: "flex",
    width: "95%",
    gap: "1rem",
    margin: "1rem auto",
    height: "58px",
    alignItems: "baseLine",
  },
  btn: {
    color: "white",
    borderRadius: "1.75rem",
    height: "2.5rem",
    width: "10rem",
    alignSelf: "center",
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  const [formData, setFormData] = useState();
  const [title, setTitle] = useState();
  // const [checkIn, setCheckIn] = useState();

  console.log(title);

  // const handleOnChange = (e) => {
  //   con
  // }

  return (
    <Box className={classes.root}>
      <CitySearchBox classes={classes} setTitle={setTitle} />
      <CheckInOut classes={classes} />
      <GuestFilter />
      <NavLink to={`${title}`}>
        <Button className={classes.btn} variant="contained" color="primary">
          <h4 style={{ color: "white" }}>Search</h4>
        </Button>
      </NavLink>
    </Box>
  );
}
