

const VedioTitle= ({title,overview})=>{
return(
  <div className="pt-36 px-12">
      <h2 className="text-3xl font-bold gap-3 flex-row">{title}</h2>
      <p className="py-6 text-lg text-black ">
  {overview}
</p>

      <div className="flex">
        <button className="bg-red-600 rounded-lg ">Play</button>
        <button className="bg-pink-300 rounded-lg">More Info</button>
      </div>
  </div>
)
}

export default VedioTitle;