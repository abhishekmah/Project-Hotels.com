import { TextField, makeStyles, Box, Button } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import GuestFilter from "./GuestFilter";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  root: {
    display: "flex",
  },
  btn: {
    color: "white",
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TextField
        variant="filled"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="1"
        label="Check-in"
        type="date"
        defaultValue="2017-05-24"
        variant="filled"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="2"
        type="date"
        label="Check-out"
        defaultValue="2017-05-24"
        variant="filled"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      {/* <GuestFilter /> */}
      <Button className={classes.btn} variant="contained" color="primary">
        <h4 style={{ color: "white" }}>Search</h4>
      </Button>
    </Box>
  );
}
