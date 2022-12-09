import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { FavoriteMoviesProvider } from "@contexts/favorite-movies.context";
import Navbar from "../../components/navbar";
import Pages from "../../pages";

export const App = (
  <FavoriteMoviesProvider>
    <Navbar />
    <Pages />
  </FavoriteMoviesProvider>
);

const customRender = (component = <Router>{App}</Router>, options) =>
  render(component, options);

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
