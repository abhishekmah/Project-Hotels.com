import { Box, Paper, Typography, makeStyles } from "@material-ui/core";
import axios from "axios";
import { Address } from "./Address";
import { Amenities } from "./Amenities";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component"

const useStyles = makeStyles({
  root: {
    display: "flex",
    gap: "1rem",
    width: "70%",
    flexDirection: "row",
    padding: "1rem",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
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
                <b>{data.price}</b>
              </Typography>
              <Typography variant="subtitle2" className={classes.excuding}>
                excluding taxes & fees
              </Typography>
            </Box>
          </Paper>
        </Box>
      )}
    </>
  );
}
