import React from 'react';

export default function Favorite({ isFavorite }) {
  return (
    <span
      style={{
        display: 'inline-block',
        backgroundColor: isFavorite ? '#FFEB3B' : 'transparent',
        borderRadius: '50%',
        width: 10,
        height: 10,
        marginRight: 10,
      }}
    />
  );
}
