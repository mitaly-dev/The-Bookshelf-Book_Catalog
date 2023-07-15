import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-[85vh] w-full">
      <img
        src="https://images.unsplash.com/photo-1525715843408-5c6ec44503b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWRpbmd8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/80">
        <div className="w-3/4 text-center md:w-2/4">
          <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl text-white">
            The Beauty of Nature
          </h1>
          <p className="mb-12 opacity-80 text-white">
            It is not so much for its beauty that the forest makes a claim upon
            men&apos;s hearts, as for that subtle something, that quality of air
            that emanation from old trees, that so wonderfully changes and
            renews a weary spirit.
          </p>
          <div className="flex justify-center gap-2">
            <button>Explore</button>
            <button>Gallery</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
