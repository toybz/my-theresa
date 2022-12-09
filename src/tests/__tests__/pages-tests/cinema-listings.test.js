import {
  render as renderApp,
  fireEvent,
  waitFor,
} from "../../utils/test-app.utils";
import GENRES from "@constants/genres.constant";
import * as useTmdbMovieListApi from "@hooks/use-tmdb-movie-list-api";
import { getRandomMovies } from "../../__mocks__/movie.mock";

describe("Cinema Listings Tests", () => {
  beforeEach(() => {
    location.href = "http://localhost";
  });

  afterAll(() => {
    jest.spyOn(useTmdbMovieListApi, "default").mockReturnValue([[], null]);
  });

  test("should correctly render the sections by genre", () => {
    const { getByText } = renderApp();

    getByText(/science fiction/i);
    getByText(/comedy/i);
    getByText(/western/i);
  });

  test("should display 77 movies added to favorites", () => {
    localStorage.setItem(
      "favorite-movies",
      JSON.stringify(getRandomMovies(77))
    );

    const { getByText } = renderApp();

    getByText("77");
  });

  test("should redirect to the movie details page", async () => {
    const TOTAL_MOVIES_TO_RETRIEVE = 10;
    const genreId = GENRES.SCIENCE_FICTION;
    const movieId = Math.floor(Math.random() * TOTAL_MOVIES_TO_RETRIEVE);

    jest
      .spyOn(useTmdbMovieListApi, "default")
      .mockReturnValue([getRandomMovies(TOTAL_MOVIES_TO_RETRIEVE), null]);

    const { getAllByTestId } = renderApp();

    await waitFor(
      () => fireEvent.click(getAllByTestId(`${genreId}-${movieId}`)[0]),
      {
        timeout: 1000,
      }
    );

    expect(location.href).toBe(
      `http://localhost/movie-details/${genreId}/${movieId}`
    );
  });
});
