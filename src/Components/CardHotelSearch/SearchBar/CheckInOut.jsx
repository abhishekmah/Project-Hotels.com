import "antd/dist/antd.css";
import { TextField, Grid } from "@material-ui/core";

export function CheckInOut({ classes }) {
  const value = "19-09-2021";

  return (
    <>
      <Grid item md={6}>
        <TextField
          id="outlined-basic"
          label="Check-in"
          className={classes.checkInOut}
          classes={{ focused: classes.checkInOutFocused }}
          defaultValue="2021-09-10"
          fullWidth="true"
          type="date"
          InputLabelProps={{
            shrink: true,
            disableUnderline: true,
          }}
        />
      </Grid>
      <Grid item md={6}>
        <TextField
          id="filled-basic"
          label="Check-out"
          className={classes.checkInOut}
          fullWidth="true"
          defaultValue="2021-09-11"
          type="date"
          InputLabelProps={{
            shrink: true,
            disableUnderline: true,
          }}
        />
      </Grid>
    </>
  );
}
