import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ShowCard = ({ show }) => {
  return (
    <Link to={`/shows/${show.id}`}>
      <div className="bg-pink-50 rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 max-w-xs mx-auto">
        {show.image?.medium && (
          <img
            src={show.image.medium}
            alt={show.name}
            className="w-full border-b-2 border-pink-400"
          />
        )}
        <h3 className="text-center text-pink-600 font-bold text-xl bg-pink-200 py-3">
          {show.name}
        </h3>
        <div className="flex flex-wrap gap-2 justify-center p-3 bg-pink-100">
          {show.genres &&
            show.genres.map((genre, idx) => (
              <span
                key={idx}
                className="text-sm text-pink-700 font-medium bg-pink-200 px-2 py-1 rounded-full"
              >
                #{genre}
              </span>
            ))}
        </div>
      </div>
    </Link>
  );
};

ShowCard.propTypes = {
  show: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.shape({
      medium: PropTypes.string,
    }),
    name: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ShowCard;
