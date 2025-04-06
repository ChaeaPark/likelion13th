import albumData from '../data/song.json';

const Playlist = () => {
  const { albumImage, releaseDate, artist, title, lyricist, composer } = albumData;

  return (
    <main className="p-10">
      <section className="w-96 bg-gray-800 p-6 rounded-xl text-white">
        <img
          src={albumImage}
          alt={`${title} 앨범 커버`}
          className="w-full rounded mb-4"
        />
        <h2 className="text-2xl font-semibold">{title}</h2>
        <hr className="my-4 border-gray-600" />
        <p className="text-gray-200">🎤 가수: {artist}</p>
        <p className="text-gray-200">📝 작사가: {lyricist}</p>
        <p className="text-gray-200">🎼 작곡가: {composer}</p>
        <p className="text-gray-400 text-sm mt-4">📅 발매일: {releaseDate}</p>
      </section>
    </main>
  );
};

export default Playlist;
