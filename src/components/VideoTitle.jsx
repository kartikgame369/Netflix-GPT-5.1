

const VedioTitle= ({title,overview})=>{
return(
  <div className=" w-screen aspect-video pt-[100%] px-24 absolute text-white ">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-12 text-lg rounded-lg hover:bg-red-500">▶️Play</button>
        <button className="bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg">ℹ️More Info</button>
      </div>
  </div>
)
}

export default VedioTitle;