import React, { useState } from 'react';

const SearchBar = ({ onSearch, initialQuery }) => {
    const [query, setQuery] = useState(initialQuery || '');

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="영화나 프로그램을 검색하세요..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button onClick={handleSearch}>검색</button>
        </div>
    );
};

export default SearchBar;


