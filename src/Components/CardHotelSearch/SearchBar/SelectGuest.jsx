import { Box, TextField, Typography, Button } from "@material-ui/core";
import { useEffect, useState } from "react";

export default function SelectGuest({ setValue }) {
  const init = [];

  const [rooms, setRooms] = useState(init);
  const [adults, setAdults] = useState(1);

  let temp = 0;

  for (let i = 0; i < rooms.length; i++) {
    temp = temp + rooms[i].adults;
  }

  // setTotalAdults(temp);

  useEffect(() => {
    let room = "room";
    let guest = "guest";
    if (adults > 1) guest += "s";
    if (rooms.length > 1) room += "s";
    let temp = `1 ${room}, ${adults} ${guest}`;
    setValue(temp);
  }, [adults, rooms]);

  const handleAddRoom = () => {
    setRooms([...rooms, { adults: 1 }]);
  };

  return (
    <>
      <Box>
        <Box>
          <Typography>Room 1</Typography>
        </Box>
        <Box>
          <Typography>Adults</Typography>
          <Box>
            <Button
              onClick={() => setAdults((prev) => prev - 1)}
              disabled={adults < 2}
            >
              -
            </Button>
            <TextField value={adults} />
            <Button
              onClick={() => setAdults((prev) => prev + 1)}
              disabled={adults >= 4}
            >
              +
            </Button>
          </Box>
        </Box>
      </Box>
      ;
      <hr />
      <Button onClick={handleAddRoom}>ADD A ROOM</Button>
      <hr />
    </>
  );
}
