import { Box, Button } from "@material-ui/core";
import { SearchCard } from "./SearchCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export function SearchResult({ setName, starRatingSort, rating, price }) {
  const [title, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [showData, setShowData] = useState([]);

  const { query } = useParams();

  const id = query;

  setName(query);

  useEffect(() => {
    getData();
    setShowData(title.filter((item) => item.address.countryName === query));
  }, [id]);

  const getData = () => {
    axios
      .get("http://localhost:3001/data")
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box>
      {title
        .sort((a, b) =>
          starRatingSort
            ? a.starRating - b.starRating
            : b.starRating - a.starRating
        )
        .sort((a, b) => (price ? a.price3 - b.price3 : b.price3 - a.price3))
        .sort((a, b) => (rating ? a.rating - b.rating : b.rating - a.rating))
        .map((item) => {
          return item;
        })
        .filter((item) => {
          let temp = item.address.city + ", " + item.address.countryName;
          return temp.includes(query);
        })
        .slice(10 * page, (page + 1) * 10)
        .map((item) => (
          <SearchCard key={item.hotelId} data={item} />
        ))}
      {/* <Box>
        <Button onClick={() => setPage((prev) => prev - 1)}>Prev</Button>
        <Button onClick={() => setPage((prev) => prev + 1)}>Next</Button>
      </Box> */}
    </Box>
  );
}
