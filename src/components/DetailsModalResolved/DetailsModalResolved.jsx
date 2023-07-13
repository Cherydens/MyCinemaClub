import { AiOutlineClose } from 'react-icons/ai';
import { getGenresByGenresId } from 'services/getGenresByGenresId';

export default function DetailsModalResolved({
  onClose,
  movie: {
    id,
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    genre_ids,
    genres,
    overview,
  },
}) {
  const genresString = genre_ids
    ? getGenresByGenresId(genre_ids).join(', ')
    : genres.map(genre => genre.name).join(', ');

  return (
    <div>
      <button type="button" onClick={onClose}>
        <AiOutlineClose />
      </button>
      <div className="movie-details-img-wrap">
        <img
          className="movie-details-img"
          src={'https://image.tmdb.org/t/p/w500' + poster_path}
          alt={title}
          width={375}
          height={478}
        />
      </div>
      <div className="movie-details-wrapper">
        <h2 className="movie-details-headline">{title}</h2>
        <div className="movie-details-inner">
          <ul className="movie-details-list">
            <li className="movie-details-item">Vote / Votes</li>
            <li className="movie-details-item">Popularity</li>
            <li className="movie-details-item">Genre</li>
          </ul>

          <ul className="movie-details-items">
            <li className="movie-details-content-inner-item movie-details-content">
              <span className="movie-details-content-inner">
                {vote_average.toFixed(1)}
              </span>
              <span className="movie-details-content-inner-slash">/</span>
              <span className="movie-details-content-inner-wrap">
                {vote_count}
              </span>
            </li>
            <li className="movie-details-content">{popularity.toFixed(1)}</li>
            <li className="movie-details-content">{genresString}</li>
          </ul>
        </div>

        <h3 className="movie-details-subtitle">About</h3>

        <p className="movie-details-description">{overview}</p>
        <div className="library-btn-modal">
          <button></button>
        </div>
      </div>
    </div>
  );
}
