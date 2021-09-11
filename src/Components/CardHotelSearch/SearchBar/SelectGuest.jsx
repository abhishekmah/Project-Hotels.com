import { TextField, Typography, Grid, makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

import { useEffect, useState } from "react";

const useStyles = makeStyles({
  textColor: {
    fontSize: "1rem",
  },
});

export default function SelectGuest({ setValue }) {
  const init = [];
  const classes = useStyles();

  const [rooms, setRooms] = useState(init);
  const [adults, setAdults] = useState(1);

  let temp = 0;

  for (let i = 0; i < rooms.length; i++) {
    temp = temp + rooms[i].adults;
  }

  // setTotalAdults(temp);

  useEffect(() => {
    let room = "room";
    let guest = "guest";
    if (adults > 1) guest += "s";
    if (rooms.length > 1) room += "s";
    let temp = `1 ${room}, ${adults} ${guest}`;
    setValue(temp);
  }, [adults, rooms]);

  const handleAddRoom = () => {
    setRooms([...rooms, { adults: 1 }]);
  };

  return (
    <>
      <Grid container alignItems="baseline">
        <Grid item md={12} xs={12} sm={12} ls={12} xl={12}>
          <Typography variant="h6">
            <b>Room 1</b>
          </Typography>
        </Grid>
        <Grid
          item
          container
          md={12}
          xs={12}
          sm={12}
          ls={12}
          xl={12}
          alignItems="baseline"
        >
          <Grid item md={4}>
            <Typography variant="h6" className={classes.textColor}>
              Adults
            </Typography>
          </Grid>
          <Grid
            item
            container
            md={8}
            justifyContent="space-around"
            alignItems="baseline"
          >
            <Grid item md={4}>
              <IconButton
                color="primary"
                onClick={() => setAdults((prev) => prev - 1)}
                disabled={adults < 2}
              >
                <RemoveIcon />
              </IconButton>
            </Grid>
            <Grid item md={1}>
              <TextField
                value={adults}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Grid>
            <Grid item md={4}>
              {" "}
              <IconButton
                color="primary"
                onClick={() => setAdults((prev) => prev + 1)}
                disabled={adults > 4}
              >
                <AddIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <hr />
      <Button onClick={handleAddRoom}>ADD A ROOM</Button>
      <hr /> */}
    </>
  );
}
