import { useState } from 'react'
import movieTrailer from 'movie-trailer'
import ReactPlayer from 'react-player'

function App() {
  const [input, setInput] = useState("kgf 2");
  const [videoLink, setVideoLink] = useState("https://www.youtube.com/watch?v=JKa05nyUmuQ");

  const onInput = (e) => {
    const value = e.target.value;
    setInput(value);
  }

  const onSearch = () => {
    movieTrailer(input)
      .then(response => {
        // console.log(response);
        setVideoLink(response);
      }).catch(error => console.log(error));
  }


  return (
    <div className='w-screen h-screen bg-[#0d160f]'>

      <div className="text-center flex justify-center items-center p-5">

        <input onChange={onInput} className="px-3 py-2 w-[400px] rounded-tl-md rounded-bl-md outline-none" type="text" placeholder='Search for Trailer...' />

        <button onClick={onSearch} className=' bg-[#2a9d8f] py-[8px] px-8 rounded-tr-md rounded-br-md hover:bg-[#38baab] hover:transition-colors'>Search</button>

      </div>

      <div className="w-[80%] h-[78%] mx-auto my-7 ">
      <ReactPlayer width="100%" height="100%" controls="true" url={videoLink} />
      </div>
    </div>

  )
}

export default App
