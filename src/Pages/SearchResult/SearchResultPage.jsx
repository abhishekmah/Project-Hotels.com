import { Grid, makeStyles } from "@material-ui/core";
import SearchBar from "../../Components/CardHotelSearch/SearchBar";
import { Filter } from "../../Components/CardHotelSearch/Filter";
import { SearchResult } from "../../Components/CardHotelSearch/SearchResult";
import { Sorting } from "../../Components/CardHotelSearch/Sorting";
import { useState } from "react";

const useStyle = makeStyles({
  root: {
    width: "90%",
    margin: "auto",
  },
  searchBar: {
    margin: "1rem auto",
  },
  filter: {
    width: "30%",
  },
  box: {
    width: "100%",
    gap: "1rem",
  },
  searchResult: {
    width: "70%",
  },
});

export function SearchResultPage() {
  const classes = useStyle();
  const [name, setName] = useState("");
  const [starRatingSort, setStarRatingSort] = useState(false);
  const [rating, setRating] = useState(false);
  const [price, setPrice] = useState(false);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={12}>
        <SearchBar className={classes.searchBar} />
        <hr />
      </Grid>
      <Grid item xs={3}>
        <Filter className={classes.filter} />
      </Grid>
      <Grid item xs={9}>
        <Sorting
          name={name}
          setStarRatingSort={setStarRatingSort}
          setRating={setRating}
          setPrice={setPrice}
        />
        <SearchResult
          className={classes.searchResult}
          setName={setName}
          starRatingSort={starRatingSort}
          price={price}
          rating={rating}
        />
      </Grid>
    </Grid>
  );
}
