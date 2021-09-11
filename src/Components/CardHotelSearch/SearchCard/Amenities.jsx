import { makeStyles, Typography } from "@material-ui/core";
// import classes from "./Amenities.module.css"


const useStyles = makeStyles({
  btn: {
    backgroundColor: "#f6f4f3",
    marginRight: "8px",
    marginBottom: "8px",
    fontSize: "12px",
    lineHeight: "14px",
    fontWeight: "700",
  },
});

export function Amenities({ amenities }) {
  const classes = useStyles();
  return (
    <>
      {amenities.slice(1,5).map((item) => {
        return (
          <Typography variant="contained" size="small" className={classes.btn}>
            {item.formatted}
          </Typography>
        );
      })}
    </>
  );
}
