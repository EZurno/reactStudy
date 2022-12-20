import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// 페이지를 새로고침 하면서 path 를 따라가지 않고, 페이지 자체에서 변경 할 수 있게끔 Link 사용

function Movie({ coverImg, title, genres, summary }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <ul>
        {genres.map((gen) => (
          <li key={gen}>{gen}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};
// genres 는 배열이므로 arrayOf

export default Movie;
