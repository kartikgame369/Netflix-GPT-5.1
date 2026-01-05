const VedioTitle = ({ title, overview }) => {
  return (
    <div
      className="
        absolute top-0 left-0
        w-screen h-screen
        flex flex-col justify-center
        px-24
        text-white
        z-20
        pointer-events-none
      "
    >
      <h1 className="text-5xl font-extrabold drop-shadow-lg">
        {title}
      </h1>

      <p className="py-6 text-lg max-w-xl leading-relaxed drop-shadow-md">
        {overview}
      </p>

      <div className="flex gap-4 pointer-events-auto">
        <button className="bg-white text-black px-10 py-3 text-lg rounded-md hover:bg-red-500 hover:text-white transition">
          ▶️ Play
        </button>

        <button className="bg-gray-600 text-white bg-opacity-60 px-10 py-3 text-lg rounded-md hover:bg-opacity-80 transition">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VedioTitle;
