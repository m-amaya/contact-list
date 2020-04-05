import React from 'react';

import Favorite from './Favorite';

export default function ContactItem({
  firstName,
  lastName,
  phone,
  isFavorite,
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #eee',
        cursor: 'pointer',
      }}>
      <p>
        <Favorite isFavorite={isFavorite} />
        <strong>{lastName},</strong> {firstName}
      </p>
      <p>{phone}</p>
    </div>
  );
}
