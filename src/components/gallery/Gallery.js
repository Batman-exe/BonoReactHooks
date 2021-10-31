import React, { useState, useEffect } from 'react';
import './Gallery.scss';
import { Card } from '../card/Card';

export const Gallery = () => {
  const url = 'https://rickandmortyapi.com/api/character';
  const [images, setGifts] = useState([]);
  useEffect(() => {
    fetchGifts();
  }, []);

  const fetchGifts = async () => {
    const resp = await fetch(url);
    const data = await resp.json();

    const gifSimple = data?.results.map((resp) => {
      return {
        id: resp.id,
        url: resp.image,
        title: resp.name,
        gender: resp.gender,
        status: resp.status,
      };
    });
    setGifts(gifSimple);
  };

  return (
    <div className='gallery-container'>
      {images?.map((d) => (
        <Card
          key={d.id}
          title={d.title}
          img={d.url}
          gender={d.gender}
          status={d.status}
        ></Card>
      ))}
    </div>
  );
};
