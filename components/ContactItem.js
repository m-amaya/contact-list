import React from 'react';
import { useDispatch } from 'react-redux';

import { setFavoriteContact } from '../actions/contacts';
import Favorite from './Favorite';

export default function ContactItem({
  id,
  firstName,
  lastName,
  phone,
  isFavorite,
}) {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #eee',
        cursor: 'pointer',
      }}
      onClick={() => dispatch(setFavoriteContact(id, !isFavorite))}>
      <p>
        <Favorite isFavorite={isFavorite} />
        <strong>{lastName},</strong> {firstName}
      </p>
      <p>{phone}</p>
    </div>
  );
}
