import { Route, Switch } from "react-router";
import CinemaListings from "./cinema-listings";
import FavoriteMovies from "./favorite-movies";
import MovieDetails from "./movie-details";

export default function Pages() {
  return (
    <Switch>
      <Route path="/movie-details/:genreId/:movieId" component={MovieDetails} />
      <Route path="/favorite-movies" exact component={FavoriteMovies} />
      <Route path="/" component={CinemaListings} />
    </Switch>
  );
}
