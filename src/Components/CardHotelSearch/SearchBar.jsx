import { makeStyles, Button, Grid, TextField } from "@material-ui/core";
import { GuestFilter } from "./SearchBar/GuestFilter";
import { CheckInOut } from "./SearchBar/CheckInOut";
import { CitySearchBox } from "./SearchBar/CitySearchBox";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "nowrap",
    margin: "1rem auto",
  },
  checkInOut: {
    border: "1px solid lightgray",
    backgroundColor: "#F6F4F3",
    borderRadius: "0px",
    cursor: "pointer",
    fontSize: "17px",
    padding: "0px",
    "&$focused": {
      border: "1px solid #156BC1",
    },
  },
  checkInOutFocused: {
    border: "1px solid #156BC1",
  },
  noHover: {
    PointerEvent: "none",
  },
  guestfilter: {
    height: "100%",
    border: "1px solid lightgray",
    backgroundColor: "#F6F4F3",
  },
  root: {
    "label + &": {
      color: "red",
    },
  },
  searchBox: {
    border: "1px solid lightgray",
    backgroundColor: "#F6F4F3",
  },
  btn: {
    color: "white",
    borderRadius: "1.75rem",
    padding: "0.5rem 2rem",
    height: "100%",
    width: "100%",
    fontWeight: "700",
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  const [formData, setFormData] = useState();
  const [value, setValue] = useState({ title: "" });
  const [checkIn, setCheckIn] = useState();

  const handleOnChange = (e) => {
    setValue(e);
  };

  // const handleOnClick = () => {
  //   setValue(e.target.value)
  // }

  return (
    <Grid
      container
      justifyContent="space-between"
      spacing={1}
      className={classes.container}
    >
      <Grid item md={4}>
        <CitySearchBox classes={classes} handleOnChange={handleOnChange} />
      </Grid>
      <Grid item container md={4} className={classes.noHover}>
        <CheckInOut classes={classes} handleOnChange={handleOnChange} />
      </Grid>
      <Grid item md={2}>
        <GuestFilter classes={classes} handleOnChange={handleOnChange} />
      </Grid>
      <Grid item md={2}>
        <NavLink to={`/search/${value}`}>
          <Button className={classes.btn} variant="contained" color="primary">
            Search
          </Button>
        </NavLink>
      </Grid>
    </Grid>

    // <Grid
    //   container
    //   // className={classes.root}
    //   justifyContent="space-between"
    //   spacing={1}
    // >
    //   <Grid item xs={3} sm={3} md={3} ls={3} xl={3}>
    //     <CitySearchBox classes={classes} handleOnChange={handleOnChange} />
    //   </Grid>
    //   <Grid item xs={3} sm={3} md={3} ls={3} xl={3}>
    //     <CheckInOut classes={classes} />
    //   </Grid>
    //   <Grid item xs={3} sm={3} md={3} ls={3} xl={3}>
    //     <GuestFilter />
    //   </Grid>
    //   <Grid item xs={3} sm={3} md={3} ls={3} xl={3}>
    //     <NavLink to={`/search/${value}`}>
    //       <Button
    //         className={classes.btn}
    //         variant="contained"
    //         color="primary"
    //       >
    //         Search
    //       </Button>
    //     </NavLink>
    //   </Grid>
    // </Grid>
  );
}
