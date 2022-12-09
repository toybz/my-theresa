import HeartIcon from "@assets/icons/HeartIcon";
import Logo from "@assets/images/logo.png";
import { Link } from "react-router-dom";
import { useFavoriteMoviesContext } from "@contexts/favorite-movies.context";

export default function Navbar() {
  const { favoriteMovies } = useFavoriteMoviesContext();

  return (
    <header className="header-navbar header-navbar-background">
      <nav>
        <Link to="/" className="items-center">
          <img src={Logo} alt="Mytheresa Logo" />
        </Link>
        <Link to="/favorite-movies" className="icon items-center">
          <HeartIcon />
          {favoriteMovies.length > 0 && (
            <div className="icon-badge">
              <div>{favoriteMovies.length}</div>
            </div>
          )}
        </Link>
      </nav>
    </header>
  );
}
