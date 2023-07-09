import { useParams } from "react-router-dom";

const MovieDetails = () => {
const {movieId} = useParams();

    return (
      <h1>MovieDetails {movieId}</h1>
        
    );
  };

  export default MovieDetails;