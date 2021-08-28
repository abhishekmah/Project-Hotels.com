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
} from "@material-ui/core";
import { useState } from "react";

function valuetext(value) {
  return `${value}`;
}

export function Filter() {
  const popularFilters = [
    { checked: false, value: "Breakfast" },
    { checked: false, value: "Wifi" },
    { checked: false, value: "Pool" },
    { checked: false, value: "Kitchen" },
    { checked: false, value: "SPA" },
  ];

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

  const handleStarRating = (e) => {
    
  }

  return (
    <Box style={{ width: "80%", display: "flex", flexDirection: "column" }}>
      <Typography>Name contains</Typography>
      <TextField placeholder="Property Name" variant="outlined" />
      <Typography>Popular Filter</Typography>
      {popularFilters.map((item) => {
        return (
          <List>
            <ListItem
              key={item.value}
              role={undefined}
              dense
              button
              onClick={(e) => handleValue(item)}
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
              <ListItemText primary={`${item.value}`} />
            </ListItem>
          </List>
        );
      })}
      <Typography>Nightly Price:</Typography>
      <Typography>
        Rs{value[0]} - {value[1]}
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        max={200000}
        min={0}
      />
      <Typography>Star Rating</Typography>
      <Box style={{ display: "flex" }}>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button style={{marginRight: "4px"}}  onClick={handleStarRating}>1</Button>
          <Button style={{marginRight: "4px"}}  onClick={handleStarRating}>2</Button>
          <Button style={{marginRight: "4px"}}  onClick={handleStarRating}>3</Button>
          <Button style={{marginRight: "4px"}}  onClick={handleStarRating}>4</Button>
          <Button onClick={handleStarRating}>5</Button>
        </ButtonGroup>
      </Box>
      <Typography>Guest Rating</Typography>
      <Slider
        value={guestRating}
        onChange={handleGuestRatingChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        // getAriaValueText={valuetext}
        max={10}
        min={0}
      />
      <Typography>Free cancellation \& payment</Typography>
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
