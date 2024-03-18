import React from 'react';

const Album = ({ album, isOpen, toggleAlbum }) => {
  return (
    <div className="album">
      <img src={album.photo} alt={album.name} />
      <h2 onClick={() => toggleAlbum(album.id)}>{album.name}</h2>
      {isOpen && (
        <ul className="song-list">
          {album.songs.map((song, index) => (
            <li key={index}>{song}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Album;
