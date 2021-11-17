// import { useEffect, useState } from 'react';
import './App.css';
import video from './videos/sculpture.mp4'

function App() {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch("https://orangevalleycaa.org/api/videos")
  //     .then(response => response.json())
  //     setData(result)
  //   }
  //   fetchData()
  // }, [])

  return (
    <div className="App">
      <header>
        <h1>Videos</h1>
      </header>
      {/* {data.map(video => (
        <div key={video.id}>
          <h2>{video.name}</h2> */}
          <video height={200} controls src={video} />
        {/* </div> */}
      {/* ))} */}
    </div>
  );
}

export default App;
