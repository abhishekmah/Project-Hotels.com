import {
  Typography,
  Button,
  Select,
  Box,
  MenuItem,
  InputLabel,
  FormControl,
  makeStyles,
  InputBase,
  withStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    padding: theme.spacing(0),
    minWidth: 120,
    height: 50,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  box: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    gap: "1rem",
    alignItems: "baseline",
    height: 40,
    margin: "1rem 0",
    color: "blue",
  },
  margin: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  btn: {
    color: "blue",
    "&:focus": {
      borderRadius: 4,
      borderColor: "#blue",
      border: "1px solid blue",
      backgroundColor: "#EDF5FD",
    },
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    color: "blue",
    border: "1px solid lightgray",

    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "blue",
      border: "1px solid blue",
      backgroundColor: "#EDF5FD",
      //   boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

export function Sorting() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h4" style={{ fontWeight: "700" }}>
        Manilla, Spain
      </Typography>
      <Box className={classes.box}>
        <Typography variant="body1" style={{ fontWeight: "700" }}>
          Sort By
        </Typography>
        <Button
          variant="outlined"
          style={{ height: "100%" }}
          className={classes.btn}
        >
          <p style={{ color: "blue" }}> Star Rating</p>
        </Button>
        <Button
          variant="outlined"
          style={{ height: "100%" }}
          className={classes.btn}
        >
          <p style={{ color: "blue" }}> Guest Rating</p>
        </Button>
        <FormControl className={classes.margin}>
          {/* <InputLabel id="demo-simple-select-filled-label">Price</InputLabel> */}
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            input={<BootstrapInput />}
            defaultValue={0}
            // native
            // value={age}
            // onChange={handleChange}
          >
            <MenuItem value={0}>Price</MenuItem>
            <MenuItem value={true}>Price (low to high)</MenuItem>
            <MenuItem value={false}>Price (high to low)</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <hr />
    </>
  );
}
