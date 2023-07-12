import React from 'react';
import homeImage from '../images/home.jpg';

const Home = () => {
  const lyrics = [
    {
      text: "slow down you crazy child, you're so ambitious for a juvenile..",
      spotifyLink: 'https://open.spotify.com/track/4U45aEWtQhrm8A5mxPaFZ7?si=mC9KH3DiSxyrLWZ1WRcKaw',
    },
    {
      text: 'How many seas must the white dove sail, before she sleeps in the sand?',
      spotifyLink: 'https://open.spotify.com/track/18GiV1BaXzPVYpp9rmOg0E?si=CXwU8OmXRh-xqJr6tCi9Zw',
    },
    {
      text: 'long you live and high you fly, but only if you ride the tide',
      spotifyLink: 'https://open.spotify.com/track/2ctvdKmETyOzPb2GiJJT53?si=3nHteKLyTRWvTKHH7jRonw&context=spotify%3Aplaylist%3A6hHHyUNAhW0x9mS8xdC8py',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div
        className="absolute top-15 left-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${homeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '95vh'
        }}
      />
      <div className="relative z-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-md" style={{ backdropFilter: 'blur(10px)', minHeight: '90vh' }}>
        <h1 className="text-3xl font-bold my-6 text-gray-900">
          where it's covered in all the coloured lights
        </h1>
        <div className="flex flex-wrap justify-center max-w-lg gap-4">
          {lyrics.map((lyric, index) => (
            <a key={index} href={lyric.spotifyLink} target="_blank" rel="noopener noreferrer">
              <div className="w-64 bg-white bg-opacity-90 rounded-lg p-4 shadow-md transition-transform transform hover:scale-105">
                <p className="text-gray-900">
                  {lyric.text}
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-auto mb-0 text-gray-900 text-center text-sm absolute bottom-2">
          Made with ❤️ &amp; a touch of impish melodic whims by Rutuja
        </div>
      </div>
    </div>
  );
};

export default Home;
