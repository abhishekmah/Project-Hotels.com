import { Button, makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  btn: {
    backgroundColor: "rgb(231, 229, 229)",
    marginRight: "1rem",
    marginBottom: "1rem",
  },
});

export function Amenities({ amenities }) {
  const classes = useStyles();
  return (
    <>
      {amenities.slice(1,5).map((item) => {
        return <Button variant="contained" size="small" className={classes.btn}>{item.formatted}</Button>;
      })}
    </>
  );
}
