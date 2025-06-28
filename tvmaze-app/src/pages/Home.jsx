import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import ShowCard from '../components/ShowCard';

const Home = () => {
  const [shows, setShows] = useState([]);
  const [lastQuery, setLastQuery] = useState('');

  const handleSearch = async (query) => {
    setLastQuery(query);
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${query}`
      );
      setShows(response.data.map((item) => item.show));
    } catch (error) {
      console.error('검색 오류:', error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-pink-100 text-gray-800">
      <header className="bg-pink-200 text-pink-600 py-6 text-center text-3xl font-bold tracking-wider rounded-b-2xl shadow-md w-full">
        TVMaze 프로그램 검색
      </header>

      <SearchBar onSearch={handleSearch} initialQuery={lastQuery} />

      <div className="grid grid-cols-2 gap-6 px-8 py-4 max-w-screen-lg mx-auto">
        {shows.length > 0 ? (
          shows.map((show) => <ShowCard key={show.id} show={show} />)
        ) : (
          <p className="col-span-2 text-center text-pink-600 text-lg mt-10">
            검색 결과가 없습니다.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
