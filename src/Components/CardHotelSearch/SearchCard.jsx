import { Box, Paper, Typography, makeStyles, Button } from "@material-ui/core";
import { Address } from "./Address";
import { Amenities } from "./Amenities";
import React from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    gap: "1rem",
    width: "100%",
    flexDirection: "row",
    padding: "1rem",
  },
  imageBox: {
    width: "30%",
  },
  priceBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    width: "20%",
  },
  detailsBox: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
  },
  image: {
    width: "100%",
    borderRadius: "4px",
  },
  excuding: {
    color: "rgb(146, 144, 144)",
  },
});

export function SearchCard({ data }) {
  const classes = useStyles();
  return (
    <>
      {data.images.length !== 0 && (
        <Box>
          <Paper className={classes.root}>
            <Box className={classes.imageBox}>
              <img
                src={data.images[0].url}
                alt="sample img"
                className={classes.image}
              />
            </Box>
            <Box className={classes.detailsBox}>
              <Typography variant="h6">
                <b>{data.name}</b>
              </Typography>
              <Typography variant="body2">
                <Address address={data.address} />
              </Typography>
              <Typography variant="">{data.rating}</Typography>
              <Box>
                <Amenities amenities={data.amenities} />
              </Box>
            </Box>
            <Box className={classes.priceBox}>
              <Typography variant="h5" bold>
                <b>${data.price3}</b>
              </Typography>
              <Typography variant="subtitle2" className={classes.excuding}>
                nightly price per room
              </Typography>
              <Typography variant="subtitle2" className={classes.excuding}>
                excluding taxes & fees
              </Typography>
              <Button variant="contained" color="primary">
                <h4 style={{ color: "white" }}>Book Now</h4>
              </Button>
            </Box>
          </Paper>
        </Box>
      )}
    </>
  );
}
