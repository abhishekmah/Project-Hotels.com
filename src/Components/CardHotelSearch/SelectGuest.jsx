import { Box, TextField, Typography, Button } from "@material-ui/core";
import { useEffect, useState } from "react";

export default function SelectGuest({ setValue }) {
  const init = [];

  const [rooms, setRooms] = useState(init);
  const [totalAdults, setTotalAdults] = useState(1);

  let temp = 0;

  for (let i = 0; i < rooms.length; i++) {
    temp = temp + rooms[i].adults;
  }

  totalAdults = temp;

  useEffect(() => {
    let room = "room";
    let guest = "guest";
    if (totalAdults > 1) guest += "s";
    if (rooms.length > 1) room += "s";
    let temp = `${rooms} ${room}, ${totalAdults} ${guest}`;
    setValue(temp);
  }, [totalAdults, rooms]);

  const handleAddRoom = () => {
    setRooms([...rooms, { adults: 1 }]);
  };

  return (
    <Box>
      {rooms.map((item) => {
        <Box>
          <Box>
            <Typography>Room {rooms}</Typography>
            {rooms > 1 && (
              <Button
                onClick={() => setRooms((prev) => prev - 1)}
                hidden={rooms <= 1}
              >
                Remove
              </Button>
            )}
          </Box>
          <Box>
            <Typography>Adults</Typography>
            <Box>
              <Button
                onClick={() => setRooms(item.adults - 1)}
                disabled={item.adults < 2}
              >
                -
              </Button>
              <TextField value={item.adults} />
              <Button
                onClick={() => setRooms(item.adults - 1)}
                disabled={item.adults >= 4}
              >
                +
              </Button>
            </Box>
          </Box>
        </Box>;
      })}
      <hr />
      <Button onClick={handleAddRoom}>ADD A ROOM</Button>
      <hr />
    </Box>
  );
}
