import React from 'react';
import Head from 'next/head';

export default function Sidebar() {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <h1>This is Sidebar</h1>
      <p>Some content for my post</p>
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>Compose</li>
        <li>Friends</li>
        <li>More</li>
    </ul>
    </div>
  );
}