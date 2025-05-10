import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        const fetchShow = async () => {
            try {
                const response = await axios.get(
                    `https://api.tvmaze.com/shows/${id}`
                );
                setShow(response.data);
            } catch (error) {
                console.error('Error fetching details:', error);
            }
        };
        fetchShow();
    }, [id]);

    if (!show) return <div>로딩 중...</div>;

    return (
        <div>
            <h2>{show.name}</h2>
            <p>{show.summary}</p>
        </div>
    );
};

export default Details;
