import React, { useState } from 'react';
import Head from 'next/head';

import ContactList from '../components/ContactList';

export default function Home() {
  const [showFavorites, setShowFavorites] = useState(false);

  return (
    <div>
      <Head>
        <title>Next.js App</title>
      </Head>

      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          width: 400,
        }}>
        <h1>Contacts</h1>
        <div
          style={{
            backgroundColor: showFavorites ? '#eee' : 'transparent',
            border: '1px solid #eee',
            borderRadius: 3,
            cursor: 'pointer',
            padding: '5px 8px',
          }}
          onClick={() => setShowFavorites(!showFavorites)}>
          Show Favorites
        </div>
      </div>
      <ContactList showFavorites={showFavorites} />
    </div>
  );
}
