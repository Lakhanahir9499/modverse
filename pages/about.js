// pages/about.js
import Head from 'next/head';
import BackgroundAnimation from '../components/BackgroundAnimation';

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us - ModVerse</title>
        <meta name="description" content="Learn about ModVerse, your source for temp mail, Telegram bots, and more." />
      </Head>
      <BackgroundAnimation />
      <div className="relative z-10 text-white p-4 max-w-3xl mx-auto mt-20">
        <h1 className="text-4xl font-bold mb-4">About ModVerse</h1>
        <p className="mb-4">ModVerse is a tech platform offering free tools like temporary email, Telegram bots, and digital utilities. We focus on privacy-first services, monetization through bots, and tech automation for daily use.</p>
        <p>Whether you're protecting your inbox, earning through referrals, or exploring smart utilities — ModVerse is your destination for modern solutions.</p>
      </div>
    </div>
  );
}
