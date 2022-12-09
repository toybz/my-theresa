import { MemoryRouter } from "react-router-dom";
import { App, render, waitFor } from "../../utils/test-app.utils";
import { getMovieMock, getRandomMovies } from "../../__mocks__/movie.mock";
import { fireEvent } from "@testing-library/react";

const renderApp = () =>
  render(
    <MemoryRouter initialEntries={["/favorite-movies"]} initialIndex={0}>
      {App}
    </MemoryRouter>
  );

describe("Favorite Movies Tests", () => {
  beforeEach(() => {
    localStorage.setItem("favorite-movies", JSON.stringify(getRandomMovies(3)));
  });

  test("should correctly render the movie by genre", () => {
    const { getByText, getAllByText } = renderApp();

    getByText("3");
    getAllByText(/the forever purge/i);
  });

  test("should remove each movie from the favorite list", () => {
    const { getByText, getAllByText } = renderApp();

    getByText("3");
    fireEvent.click(getAllByText(/remove movie/i)[0]);

    getByText("2");
    fireEvent.click(getAllByText(/remove movie/i)[0]);

    getByText("1");
    fireEvent.click(getAllByText(/remove movie/i)[0]);

    getByText(/there are no favorite movies selected/i);
  });
});
