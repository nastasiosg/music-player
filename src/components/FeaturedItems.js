import React from 'react';

function FeaturedItems(props) {
  var artist = props.artist || '';
  var album = props.album || '';
  var imgSrc = props.imgSrc;
  var imgAlt = props.imgAlt;
  if (album.length > 9) {
    album = album.slice(0, 9).trim() + '..';
  }
  if (artist.length > 5) {
    artist = artist.slice(0, 5).trim() + '..';
  }
  return (
    <ul className="flex flex-col justify-center items-start">
      <li className="">
        <img src={imgSrc} className="w-32 h-32 rounded-md" alt={imgAlt} />
      </li>
      <div className="flex mt-1 mx-auto">
        <li className="text-sm">{album}</li>
        <li className="text-sm"> - </li>
        <li className="text-sm">{artist}</li>
      </div>
    </ul>
  );
}

export default FeaturedItems;
