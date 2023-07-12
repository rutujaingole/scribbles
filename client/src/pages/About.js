import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{ background: 'linear-gradient(to bottom, #f2e15c, #a16731)', minHeight: '100vh' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl bg-white bg-opacity-90 rounded-lg p-8 shadow-md">
          <p className="mb-6 text-lg text-gray-800">
            Welcome to my blog, where I embark on a melodious journey paying homage to the legends of music! Get ready to dive into the world of impish melodic enchantment as I dedicate this space to the timeless tunes of iconic bands and singers.
          </p>
          <p className="mb-6 text-lg text-gray-800">
            From the mesmerizing sounds of Pink Floyd to the electrifying performances of Queen, and the soulful melodies of Train, Radiohead, Green Day, The Who, The Cranberries, Nirvana, Guns N' Roses, Poets of the Fall, and many more, we'll explore the vibrant tapestry of musical brilliance.
          </p>
          <p className="mb-6 text-lg text-gray-800">
            Join me as we unravel the stories behind the songs, bask in the nostalgia of classic hits, and discover hidden gems that still manage to make our toes tap and our hearts sing. It's a musical playground where we celebrate the magic that these legendary artists have bestowed upon us.
          </p>
          <p className="mb-6 text-lg text-gray-800">
            So, whether you're a die-hard fan who knows every lyric by heart or a curious soul ready to embark on a sonic adventure, this blog is for you. Expect witty anecdotes, humorous anecdotes, and a whole lot of laughter sprinkled amidst the music.
          </p>
          <p className="text-lg text-gray-800 text-right font-semibold">
            ~ Rutuja
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
