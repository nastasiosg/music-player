import React from 'react';

function DailyMixItems(props) {
  var title = props.title || '';
  var artist = props.artist || '';
  var album = props.album || '';
  var length = props.length || '';
  var imgSrc = props.imgSrc;
  var imgAlt = props.imgAlt;
  if (title.length > 10) {
    title = title.slice(0, 10).trim() + '...';
  }
  if (artist.length > 12) {
    artist = artist.slice(0, 12).trim() + '...';
  }
  if (album.length > 8) {
    album = album.slice(0, 8).trim() + '...';
  }
  return (
    <>
      <li className=""><img src={imgSrc} alt={imgAlt} className="w-7 rounded-md" /></li>
      <li className="text-sm">{title}</li>
      <li className="text-sm">{artist}</li>
      <li className="text-sm">{album}</li>
      <li className="text-sm">{length}</li>
    </>
  );
}

export default DailyMixItems;
