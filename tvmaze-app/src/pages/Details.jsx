import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(response.data);
      } catch (error) {
        console.error('상세 정보 요청 실패:', error);
      }
    };
    fetchShow();
  }, [id]);

  if (!show) {
    return (
      <div className="min-h-screen flex items-center justify-center text-pink-600 text-xl">
        로딩 중...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6">
        <h1 className="text-3xl font-bold text-pink-600 text-center">
          {show.name}
        </h1>

        {show.image?.original && (
          <img
            src={show.image.original}
            alt={show.name}
            className="w-full rounded-lg shadow-md"
          />
        )}

        <div className="space-y-2">
          <p>
            <span className="font-semibold text-pink-500">장르:</span>{' '}
            {show.genres.join(', ')}
          </p>
          <p>
            <span className="font-semibold text-pink-500">평점:</span>{' '}
            {show.rating.average || 'N/A'}
          </p>
          <p>
            <span className="font-semibold text-pink-500">공식 사이트:</span>{' '}
            {show.officialSite ? (
              <a
                href={show.officialSite}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                바로가기
              </a>
            ) : (
              '없음'
            )}
          </p>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold text-pink-500">설명</h2>
          <div dangerouslySetInnerHTML={{ __html: show.summary }} />
        </div>
      </div>
    </div>
  );
};

export default Details;
