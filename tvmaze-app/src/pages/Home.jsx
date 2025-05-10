import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import ShowCard from '../components/ShowCard';

const Home = () => {
    const [shows, setShows] = useState([]);
    const [lastQuery, setLastQuery] = useState('');

    const handleSearch = async (query) => {
        setLastQuery(query);  // 검색어를 상태에 저장
        try {
            const response = await axios.get(
                `https://api.tvmaze.com/search/shows?q=${query}`
            );
            setShows(response.data.map(item => item.show));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="main-container">
            <header>프로그램 검색</header>
            <SearchBar onSearch={handleSearch} initialQuery={lastQuery} />
            <div className="card-container">
                {shows.length > 0 ? (
                    shows.map((show) => (
                        <ShowCard key={show.id} show={show} />
                    ))
                ) : (
                    <p style={{ textAlign: 'center', marginTop: '2rem', color: '#d6336c' }}>
                        검색 결과가 없습니다.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Home;



