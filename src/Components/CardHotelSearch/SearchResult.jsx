import { Box, Button } from "@material-ui/core";
import { SearchCard } from "./SearchCard";
import axios from "axios";
import { useState, useEffect } from "react";

export function SearchResult() {
  const [title, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [showData, setShowData] = useState([]);

  let query = "spain";
  setShowData(() => {
    title.filter((item) => item.name.includes(query));
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:3004/data")
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box>
      {showData.slice(10 * page, (page + 1) * 10).map((item) => (
        <SearchCard key={item.hotelId} data={item} />
      ))}
      <Box>
        <Button onClick={() => setPage((prev) => prev - 1)}>Prev</Button>
        <Button onClick={() => setPage((prev) => prev + 1)}>Next</Button>
      </Box>
    </Box>
  );
}
