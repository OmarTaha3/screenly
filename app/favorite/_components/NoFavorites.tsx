import React from 'react';

const NoFavorites = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20">
      <span className="text-4xl text-gray-400">❤️</span>
      <h2 className="mt-4 text-2xl font-semibold">No Favorites Yet</h2>
      <p className="mt-2 text-gray-500">
        Explore movies and add your favorites to this list!
      </p>
      <button className="mt-4 rounded-full bg-primary px-6 py-2 text-white">
        Start Exploring
      </button>
    </section>
  );
};

export default NoFavorites;
