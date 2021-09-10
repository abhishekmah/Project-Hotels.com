import { Box, Typography, makeStyles, Button } from "@material-ui/core";
import { Address } from "./SearchCard/Address";
import { Amenities } from "./SearchCard/Amenities";
import React from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    gap: "1rem",
    width: "100%",
    flexDirection: "row",
    padding: "1rem",
    borderBottom: "1px solid #bebcbc",
  },
  imageBox: {
    width: "30%",
    marginRight: "1rem",
    borderRadius: "16px",
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
    borderRadius: "2%",
    maxWidth: "280px",
    minWidth: "280px",
    maxHeight: "200px",
    minHeight: "200px",
    // objectFit: "contain",
    alignContent: "top",
  },
  excuding: {
    color: "#6e6e6e",
  },
  address: {
    fontSize: "12px",
    lineHeight: "14px",
    fontWeight: "400",
    color: "#525252",
    margin: "0",
  },
  name: {
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: "700",
    color: "#1a1c1b",
    marginRight: "4px",
    display: "inline",
  },
  ratings: {
    fontWeight: "700",
    margin: "2px 4px",
    padding: "2px 6px",
    width: "max-content",
    position: "relative",
    borderRadius: "2px",
    display: "inline-block",
    marginTop: "1rem",
  },
  ratingNumber: {
    backgroundColor: "#218242",
    color: "#ffffff",
  },
  free: {
    color: "#218242",
    listStyle: "none",
  },
  btn: {
    width: "7.5rem",
    height: "3rem",
    borderRadius: "1.5rem",
    fontWeight: "700",
    margin: "0.5rem 0",
    backgroundColor: "#156bc1",
  },
});

export function SearchCard({ data }) {
  const classes = useStyles();

  let ratingAttr = 0;
  // data.rating = Math.floor(Math.random() * 100) / 10;
  if (data.rating + 5 < 10) data.rating += 5;
  if (data.rating > 9.5) ratingAttr = "Excellant";
  else if (data.rating > 9) ratingAttr = "Super";
  else if (data.rating > 8.5) ratingAttr = "Fabulous";
  else ratingAttr = "Good";

  let temp = Math.random();
  if (temp < 0.5) data.freeCancellation = true;
  else data.freeCancellation = false;

  return (
    <>
      {data.images.length !== 0 && (
        <Box>
          <Box className={classes.root}>
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
              <Typography variant="body2" className={classes.address}>
                <Address address={data.address} />
              </Typography>
              <Typography variant="body">
                <span
                  className={classes.ratings}
                  style={{
                    fontWeight: "700",
                    paddingRight: "0",
                    marginLeft: "-6px",
                  }}
                >
                  Midtown South{" "}
                </span>
                <ul className={classes.address}>
                  <li>1.0 km from city center</li>
                  <li>10.5 km from Airport station</li>
                  <li>8.5 km from railway station</li>
                </ul>
              </Typography>
              <Typography variant="">
                <span className={`${classes.ratings} ${classes.ratingNumber}`}>
                  {data.rating}
                </span>
                <span style={{ fontWeight: "700" }}>{ratingAttr}</span>
              </Typography>
              <Typography className={classes.address}>
                {Math.floor(Math.random() * 2000)} Hotels.com guest reviews
              </Typography>
              <Box>
                <Amenities amenities={data.amenities} />
              </Box>
            </Box>
            <Box className={classes.priceBox}>
              <Typography variant="h5" bold>
                <b>Rs {data.price3}</b>
              </Typography>
              <Typography variant="subtitle2" className={classes.address}>
                nightly price per room
              </Typography>
              <Typography
                variant="subtitle2"
                className={`${classes.address} ${classes.excluding}`}
              >
                excluding taxes & fees
              </Typography>
              <NavLink to={`/hotel/${data.hotelId}`}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                >
                  Book Now
                </Button>
              </NavLink>
              {data.freeCancellation && (
                <ul
                  className={`${classes.address}`}
                  style={{ textAlign: "right" }}
                >
                  <li className={classes.free}>&#x2713; Free Cancellation</li>
                  <li className={classes.free}>
                    &#x2713; Pay at property <br />
                    available
                  </li>
                </ul>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
