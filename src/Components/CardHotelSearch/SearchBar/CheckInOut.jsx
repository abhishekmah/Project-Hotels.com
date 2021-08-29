import { Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";

export function CheckInOut({ classes, setNight }) {
  // let checkin = 0;
  // let checkout = 0;
  // const handleCheckIn = (e) => {
  //   checkin = e.target.value;
  // };
  // const handleCheckOut = (e) => {
  //   checkout = e.target.value;
  // };

  // let diff_in_time = Number(checkout.slice(7)) - Number(checkin.slice(7));
  let diff_in_days = 4;

  console.log(diff_in_days);

  return (
    <Box>
      <TextField
        id="1"
        label="Check-in"
        type="date"
        defaultValue="2021-08-28"
        variant="outlined"
        color="primary"
        required
        className={classes.textField}
        // notched={false}
        margin="dense"
        // onChange={handleCheckIn}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="2"
        type="date"
        label="Check-out"
        defaultValue="2021-08-29"
        variant="outlined"
        // onChange={handleCheckOut}
        color="primary"
        className={classes.textField}
        margin="dense"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
}
