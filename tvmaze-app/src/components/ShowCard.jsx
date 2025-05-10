import React from 'react';

const ShowCard = ({ show }) => {
    return (
        <div className="card">
            <img src={show.image?.medium} alt={show.name} />
            <h3>{show.name}</h3>
            <p>{show.genres?.join(' / ')}</p>
        </div>
    );
};

export default ShowCard;
