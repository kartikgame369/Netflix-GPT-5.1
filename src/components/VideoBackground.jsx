const VedioBackground = () => {
  return (
    <div className="w-screen h-screen pt-21">
      <iframe
        className="w-full h-full bg-linear-to-r from-black"
        src="https://www.youtube.com/embed/sEgPQ7HKoBA?autoplay=1&mute=1&controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VedioBackground;
