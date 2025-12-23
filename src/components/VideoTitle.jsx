

const VedioTitle= ({title,overview})=>{
return(
  <div className="pt-36 px-12">
      <h2 className="text-6xl font-bold">{title}</h2>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-red-600 rounded-lg ">Play</button>
        <button className="bg-pink-300 rounded-lg">More Info</button>
      </div>
  </div>
)
}

export default VedioTitle;