import React from 'react';
import albumData from '../data/song.json';
import SongCard from '../components/SongCard';

const Playlist = () => {
  return (
    <main className="min-h-screen bg-black text-white pt-24 px-6">
      <section className="flex flex-wrap gap-8 justify-center">
        {albumData.map((song, index) => (
          <SongCard key={index} {...song} />
        ))}
      </section>
    </main>
  );
};

export default Playlist;

