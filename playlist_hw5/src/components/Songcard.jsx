import React, { useState } from 'react';
import Modal from './Modal';

const SongCard = ({ albumImage, releaseDate, artist, title, lyricist, composer }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <div
        onClick={openModal}
        className="bg-[#1f2937] text-white rounded-xl shadow-md 
             ph:p-3 ph:m-3 ph:text-sm ph:w-60
             dt:p-6 dt:m-5 dt:text-base dt:w-80
             cursor-pointer transform transition-transform duration-300 
             hover:scale-105 hover:-translate-y-1 hover:shadow-2xl"
      >
        <img
          src={albumImage}
          alt={title}
          className="w-full aspect-square object-cover rounded-md"
        />
        <h2 className="text-2xl font-bold text-center mt-4 border-b border-gray-600 pb-1">{title}</h2>
        <div className="text-sm text-center mt-3 space-y-1 text-gray-300">
          <p>🎤 <span className="font-semibold text-white">가수</span>: {artist}</p>
          <p>🖋️ <span className="font-semibold text-white">작사가</span>: {lyricist}</p>
          <p>🎼 <span className="font-semibold text-white">작곡가</span>: {composer}</p>
        </div>
        <p className="inline-block bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full mt-4 mx-auto text-center">
          📅 {releaseDate}
        </p>
      </div>

      {showModal && (
        <Modal
          show={showModal}
          onClose={closeModal}
          albumImage={albumImage}
          title={title}
          artist={artist}
          lyricist={lyricist}
          composer={composer}
          releaseDate={releaseDate}
        />
      )}
    </div>
  );
};

export default SongCard;

