import { MemoryRouter } from "react-router-dom";
import { App, render, waitFor } from "../../utils/test-app.utils";
import * as useTmdbMovieDetailsApi from "@hooks/use-tmdb-movie-details-api";
import { getMovieMock } from "../../__mocks__/movie.mock";
import { fireEvent } from "@testing-library/react";

const renderApp = () =>
  render(
    <MemoryRouter initialEntries={["/movie-details/878/0"]} initialIndex={0}>
      {App}
    </MemoryRouter>
  );

describe("Movie Details Tests", () => {
  beforeEach(() => {
    jest
      .spyOn(useTmdbMovieDetailsApi, "default")
      .mockReturnValue([getMovieMock(0), null]);
  });

  afterAll(() => {
    jest.spyOn(useTmdbMovieDetailsApi, "default").mockReturnValue([[], null]);
  });

  test("should correctly render the movie by genre", async () => {
    const { getByText } = renderApp();

    await waitFor(() => getByText(/science fiction/i));
  });

  test("should correctly add a movie to the favorite movies list", async () => {
    const { getByText, queryByText } = renderApp();

    await waitFor(() => fireEvent.click(getByText(/add to favorites/i)));

    getByText("1");
    getByText(/remove from favorites/i);
    expect(queryByText(/add to favorites/i)).toBeNull();
  });

  test("should correctly remove a movie from the favorite movies list", async () => {
    const { getByText, queryByText } = renderApp();

    await waitFor(() => fireEvent.click(getByText(/add to favorites/i)));

    getByText("1");

    fireEvent.click(getByText(/remove from favorites/i));

    expect(queryByText("1")).toBeNull();
  });

  test("should correctly go back to the main listings", async () => {
    const { getByText } = renderApp();

    await waitFor(() => fireEvent.click(getByText(/go back/i)));

    expect(location.href).toBe("http://localhost/");
  });
});
