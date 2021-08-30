import { Box, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
// import {
//   KeyboardDatePicker,
//   MuiPickersUtilsProvider,
// } from "@material-ui/pickers";
import React from "react";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "nowrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 130,
  },
}));

const WrapperTextField = styled(TextField)`
  width: 150px;
`;

export function CheckInOut({ classes, setNight }) {
  const xx = useStyles();
  // let checkin = 0;
  // let checkout = 0;
  // const handleCheckIn = (e) => {
  //   checkin = e.target.value;
  // };
  // const handleCheckOut = (e) => {
  //   checkout = e.target.value;
  // };

  // let diff_in_time = Number(checkout.slice(7)) - Number(checkin.slice(7));
  // let diff_in_days = 4;

  // console.log(diff_in_days);

  return (
    <form noValidate>
      <WrapperTextField
        id="date1"
        label="Check-in"
        variant="filled"
        type="date"
        defaultValue="2021-08-29"
        className={xx.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <WrapperTextField
        id="date2"
        label="Check-out"
        variant="filled"
        type="date"
        defaultValue="2021-08-31"
        className={xx.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
