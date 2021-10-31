import React, { useState, useEffect } from 'react';
import './Gallery.scss';
import { Card } from '../card/Card';

export const Gallery = () => {
  let url = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=7d7c3c9c7447910b6c8dc516b4447e33&hash=9ce2e9f6378288deacb2e288aba84603';
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const resp = await fetch(url);
    const data = await resp.json();

    const characterSimple = data?.data.results.map((resp) => {
      return {
        id: resp.id,
        path: resp.thumbnail.path,
        ext: resp.thumbnail.extension,
        name: resp.name,
        description: resp.description,
      };
    });
    setCharacters(characterSimple);
  };

  return (
    <div className='gallery-container'>
      {characters?.map((d) => (
        <Card
          key={d.id}
          name={d.name}
          img={d.path.concat('.').concat(d.ext)}
          description={d.description}
        ></Card>
      ))}
    </div>
  );
};
