import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/goit-react-hw-05-movies/movies" element={<Movies/>}/>
        <Route path="/goit-react-hw-05-movies/movies/:movieId" element={<MovieDetails/>}/>
        <Route path="*" element={<Home/>}/>
        </Routes>
    </div>
  );
};
