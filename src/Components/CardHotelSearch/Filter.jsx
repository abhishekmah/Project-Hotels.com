import {
  Box,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Button,
  Slider,
  ButtonGroup,
  makeStyles,
} from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components"

function valuetext(value) {
  return `${value}`;
}

const useStyle = makeStyles({
  text: {
    variant: "body1",
    fontWeight: "700",
  },
  list:{
    margin: "0",
    padding: "0"
  }
});

const WrapperButton = styled.button`
  width: 50px;
  margin: 4px 8px 0 0;
  padding: 4px;
  background-color: white;
  font-weight: 700;
  border: 1px solid lightgray;
  border-radius: 4px;
  color: #156bc1;
`;

export function Filter() {
  const popularFilters = [
    { checked: false, value: "Breakfast" },
    { checked: false, value: "Wifi" },
    { checked: false, value: "Pool" },
    { checked: false, value: "Kitchen" },
    { checked: false, value: "SPA" },
  ];

  const classes = useStyle();

  const [state, setState] = useState(popularFilters);

  const [value, setValue] = useState([0, 200000]);

  const [guestRating, setGuestRating] = useState([0, 10]);

  const handleValue = (item) => {
    setState([...state]);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleGuestRatingChange = (event, newValue) => {
    setGuestRating(newValue);
  };

  const handleStarRating = (e) => {};

  return (
    <Box style={{ width: "80%", display: "flex", flexDirection: "column" }}>
      <Typography className={classes.text} variant="body1">
        Name contains
      </Typography>
      <TextField placeholder="Property Name" variant="outlined" />
      <hr style={{ margin: "1rem 0" }} />
      <Typography className={classes.text} variant="body1">
        Popular Filter
      </Typography>
      {popularFilters.map((item) => {
        return (
          <List>
            <ListItem
              key={item.value}
              role={undefined}
              // dense
              button
              className={classes.list}
              onClick={(e) => handleValue(item)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  //   checked={item.checked}
                  tabIndex={-1}
                  disableRipple
                  color="#3880ff"
                  //   inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              
              <ListItemText primary={`${item.value}`} className={classes.list}/>
            </ListItem>
          </List>
        );
      })}
      <hr style={{ margin: "1rem 0" }} />

      <Typography className={classes.text} variant="body1">
        Nightly Price:
      </Typography>
      <Typography variant="body1">
        Rs{value[0]} - {value[1]}
      </Typography>
      <Slider
        value={value}
        className={classes.slider}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        max={200000}
        min={0}
      />
      <hr style={{ margin: "1rem 0" }} />

      <Typography className={classes.text} variant="body1">
        Star Rating
      </Typography>
      <Box style={{ display: "flex", width: "100%" }}>
        <WrapperButton variant="outlined" onClick={handleStarRating}>
          1
        </WrapperButton>
        <WrapperButton variant="outlined" onClick={handleStarRating}>
          2
        </WrapperButton>
        <WrapperButton variant="outlined" onClick={handleStarRating}>
          3
        </WrapperButton>
        <WrapperButton variant="outlined" onClick={handleStarRating}>
          4
        </WrapperButton>
        <WrapperButton variant="outlined" onClick={handleStarRating}>
          5
        </WrapperButton>
      </Box>

      <hr style={{ margin: "1rem 0" }} />
      <Typography className={classes.text} variant="body1">
        Guest Rating
      </Typography>
      <Slider
        value={guestRating}
        onChange={handleGuestRatingChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        // getAriaValueText={valuetext}
        max={10}
        min={0}
      />
      <hr style={{ margin: "1rem 0" }} />

      <Typography className={classes.text} variant="body1">
        Free cancellation & payment
      </Typography>
      <List>
        <ListItem
          key="cancellation"
          role={undefined}
          dense
          button
          // onClick={(e) => handleValue(item)}
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              //   checked={item.checked}
              tabIndex={-1}
              disableRipple
              //   inputProps={{ "aria-labelledby": labelId }}
            />
          </ListItemIcon>
          <ListItemText primary="Free Cancellation" />
        </ListItem>
      </List>
    </Box>
  );
}
