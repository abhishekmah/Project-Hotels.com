import { Box, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import SelectGuest from "./SelectGuest";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    right: 0,
    left: 0,
    zIndex: 1,
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export function GuestFilter({ classes }) {
  const [value, setValue] = useState("1 room, 1 guest");
  const [open, setOpen] = useState(false);

  const classs = useStyles();

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <>
      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={handleClickAway}
      >
        <div className={classs.root}>
          <TextField
            label="Guests"
            type="text"
            value={value}
            className={classes.guestfilter}
            fullWidth="true"
            onClick={handleClick}
          />
          {open ? (
            <div className={classs.dropdown}>
              <SelectGuest setValue={setValue} />
            </div>
          ) : null}
        </div>
      </ClickAwayListener>
    </>
  );
}
