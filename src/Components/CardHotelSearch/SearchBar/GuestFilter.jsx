import { Box, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import SelectGuest from "./SelectGuest";

export function GuestFilter() {
  const [value, setValue] = useState("1 room, 1 guest");
  const [showRoomSelector, setShowRoomSelector] = useState(false);

  return (
    <Box style={{ userSelect: "none" }}>
      <TextField
        id="filled-multiline-flexible"
        label="Guests"
        multiline
        maxRows={0}
        margin="dense"
        value={value}
        // disabled={true}
        onClick={() => setShowRoomSelector(!showRoomSelector)}
        variant="filled"
      />
      {showRoomSelector && <SelectGuest setValue={setValue} />}
    </Box>
  );
}
