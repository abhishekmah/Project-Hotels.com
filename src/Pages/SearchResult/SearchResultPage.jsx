import {Grid, makeStyles } from "@material-ui/core";
import SearchBar from "../../Components/CardHotelSearch/SearchBar";
import { Filter } from "../../Components/CardHotelSearch/Filter";
import { SearchResult } from "../../Components/CardHotelSearch/SearchResult";

const useStyle = makeStyles({
  root: {
    width: "90%",
    margin: "auto",
  },
  searchBar: {
    width: "100%",
    margin: "auto",
  },
  filter: {
    width: "30%",
  },
  box: {
    // display: "flex",
    width: "100%",
    gap: "1rem",
  },
  searchResult: {
    width: "70%",
  },
});

export function SearchResultPage() {
  const classes = useStyle();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <SearchBar className={classes.searchBar} />
      </Grid>
      <Grid item xs={3}>
        <Filter className={classes.filter} />
      </Grid>
      <Grid item xs={9}>
        <SearchResult className={classes.searchResult} />
      </Grid>
    </Grid>
  );
}
