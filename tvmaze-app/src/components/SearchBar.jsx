import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch, initialQuery }) => {
  const [query, setQuery] = useState(initialQuery || '');
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('recentSearches')) || [];
    setRecent(stored);
  }, []);

  const handleSearch = () => {
    const trimmed = query.trim();
    if (!trimmed) return;

    onSearch(trimmed);

    const updated = [trimmed, ...recent.filter((item) => item !== trimmed)];
    if (updated.length > 5) updated.length = 5;

    setRecent(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
    setQuery('');
  };

  return (
    <div className="flex flex-col items-center my-8 w-full">
      <div className="flex">
        <input
          type="text"
          placeholder="영화나 프로그램을 검색하세요..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="px-4 py-2 w-80 rounded-full border-2 border-pink-600 bg-pink-50 text-pink-600 placeholder-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 rounded-full bg-pink-500 text-white font-bold hover:bg-pink-600 transition"
        >
          검색
        </button>
      </div>

      {recent.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          <div className="mb-1 font-semibold">최근 검색어:</div>
          <div className="flex flex-wrap gap-2">
            {recent.map((item, idx) => (
              <button
                key={idx}
                onClick={() => onSearch(item)}
                className="bg-pink-200 px-3 py-1 rounded-full hover:bg-pink-300 text-pink-800"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  initialQuery: PropTypes.string,
};

export default SearchBar;
