import "./App.css";
import AddMovies from "./components/AddMovies";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import { MovieContextProvider } from "./contexts/MovieContext";

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Navbar />
        <AddMovies />
        <MovieList />
      </MovieContextProvider>
    </div>
  );
}

export default App;
