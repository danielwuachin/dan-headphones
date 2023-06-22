import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dan Headphones</title>
        <meta name="description" content="Shop the best headphones, speakers, and smartwatches at Dan Headphones!" />
        <meta name="keywords" content="headphones, speakers, smartwatches, buy headphones, headphone store" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Dan Headphones - Headphone Store" />
        <meta property="og:description" content="Shop the best headphones, speakers, and smartwatches at Dan Headphones!" />
        <meta property="og:image" content="https://cdn.sanity.io/images/hrwmn7go/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp" />
        <meta property="og:url" content="https://dan-headphones.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@danheadphones" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout