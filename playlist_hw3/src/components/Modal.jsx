import React, { useEffect } from 'react';

const Modal = ({ show, onClose, albumImage, title, artist, lyricist, composer, releaseDate }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [show]);

  if (!show) return null;

  const handleClickOutside = (e) => {
    if (e.target.id === 'modal-backdrop') onClose();
  };

  return (
    <div
      id="modal-backdrop"
      onClick={handleClickOutside}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div className="bg-[#1f2937] text-white rounded-xl shadow-md p-4 w-72 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">✖️</button>
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
    </div>
  );
};

export default Modal;


