import {
  Typography,
  Button,
  Select,
  Box,
  MenuItem,
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
    alignItems: "center",
    height: 40,
    margin: "1rem 0",
    // color: "blue",
  },
  margin: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  btn: {
    color: "blue",
    display: "flex",
    alignItems: "center",
    fontWeight: "400",
    height: "100%",
    border: "1px solid #D3D3D3",
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

export function Sorting({ name, setStarRatingSort, setRating, setPrice }) {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h4">
        {name}
      </Typography>
      <Box className={classes.box}>
        <Typography variant="body1">
          Sort By
        </Typography>
        <Button
          variant="outlined"
          className={classes.btn}
          onClick={() => setStarRatingSort((prev) => !prev)}
        >
          Star Rating
        </Button>
        <Button
          variant="outlined"
          className={classes.btn}
          onClick={() => setRating((prev) => !prev)}
        >
          Guest Rating
        </Button>
        <FormControl className={classes.margin}>
          {/* <InputLabel id="demo-simple-select-filled-label">Price</InputLabel> */}
          <Select
            // labelId="demo-simple-select-filled-label"
            // id="demo-simple-select-filled"
            input={<BootstrapInput />}
            defaultValue={0}
            // native
            // value={age}
            // onChange={handleChange}
          >
            <MenuItem value={0}>PRICE</MenuItem>
            <MenuItem value={true} onClick={(e) => setPrice(true)}>
              Price (low to high)
            </MenuItem>
            <MenuItem value={false} onClick={(e) => setPrice(false)}>
              Price (high to low)
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <hr />
    </>
  );
}
