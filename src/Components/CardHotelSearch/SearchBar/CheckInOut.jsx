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
    width: 130,
  },
}));

const WrapperTextField = styled(TextField)`
  width: 150px;
`;

export function CheckInOut({ classes, setNight }) {
  const classs = useStyles();

  return (
    <form noValidate>
      <WrapperTextField
        id="date1"
        label="Check-in"
        variant="filled"
        type="date"
        defaultValue="2021-08-29"
        className={classs.textField}
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
        className={classs.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
