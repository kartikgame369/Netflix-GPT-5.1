const VedioBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-10 overflow-hidden">
      {/* Video */}
      <iframe
        className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        src="https://www.youtube.com/embed/sEgPQ7HKoBA?autoplay=1&mute=1&controls=0&loop=1&playlist=sEgPQ7HKoBA&modestbranding=1&rel=0"
        title="YouTube video player"
        allow="autoplay; encrypted-media"
      ></iframe>

      {/* Dark Gradient Overlay (FIXED) */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default VedioBackground;
