import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

const Navbar = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <nav className="navbar">
      <h3>Movie</h3>
      <p>List of Movies :{movies.length}</p>
    </nav>
  );
};

export default Navbar;
