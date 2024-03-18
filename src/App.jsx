import React, { useState } from 'react';
import Album from './Album';

const albumsData = [
  {
    id: 1,
    name: 'UTOPIA',
    photo: 'public/download.jpeg',
    songs: [
      'HYAENA',
      'THANK GOD (feat. KayCyy)',
      'MODERN JAM (feat. Teezo Touchdown)',
      'MY EYES (feat. Bon Iver & Sampha)',
      'GOD’S COUNTRY',
      'SIRENS',
      'MELTDOWN (feat. Drake)',
      'FE!N (feat. Playboi Carti & Sheck Wes)',
      'DELRESTO (ECHOES)(feat. Beyoncé & Bon Iver)',
      'I KNOW ?',
      'TOPIA TWINS (feat. 21 Savage & Rob49)',
      'CIRCUS MAXIMUM (feat. The Weeknd & Swae Lee)',
      'PARASAIL (feat. Yung Lean & Dave Chapelle)',
      'SKITZO (feat. Young Thug)',
      'LOST FOREVER (feat. James Blake & Westside Gunn)',
      'LOOOVE (feat. Kid Cudi)',
      'K-POP (feat. The Weeknd & Bad Bunny)',
      'TELEKINESIS (feat. SZA & Future)',
      'TIL FURTHER NOTICE (feat. 21 Savage & James Blake)'
    ]
  },
  {
    id: 2,
    name: 'HEROES & VILLIANS',
    photo: 'public/h.jpeg',
    songs: [
      'ON TIME',
      'SUPERHERO (HEROES & VILLAINS)',
      'TOO MANY NIGHTS',
      'RAINDROPS (INSANE)',
      'UMBRELLA',
      'TRANCE',
      'AROUND ME',
      'METRO SPIDER',
      'I CAN’T SAVE YOU (INTERLUDE)',
      'CREEPIN',
      'NIAGARA FALLS (FOOT OR 2)',
      'WALK EM DOWN (DON’T KILL CIVILIANS)',
      'LOCK ON ME',
      'FEEL THE FIYAAAAH',
      'ALL THE MONEY'
    ]
  },
];

function App() {
  const [albums, setAlbums] = useState(albumsData);
  const [openAlbumId, setOpenAlbumId] = useState(null);

  const toggleAlbum = (albumId) => {
    setOpenAlbumId((prevId) => (prevId === albumId ? null : albumId));
  };

  return (
    <div className="App">
      <h1>Music Albums</h1>
      <div className="album-list">
        {albums.map((album) => (
          <Album
            key={album.id}
            album={album}
            isOpen={openAlbumId === album.id}
            toggleAlbum={toggleAlbum}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
