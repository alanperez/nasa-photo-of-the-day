import React,{ useState, useEffect } from 'react'
import axios from 'axios';

const Data = () => {

const [data,setData] = useState('')

  useEffect(() => {
     axios.get('https://api.nasa.gov/planetary/apod?api_key=FUl9H67678sb9kCudx3rZUeyrhwTCebr1657dwPU').then(res => setData(res.data))

    // setPhotos(res.data);
  }, []);

  
  return (
    <>
    <div className="content" style={{textAlign:'center', margin: '50px'}}>
      <div className="title">
        {data.title}
        <p>
          {data.explanation}
        </p>
        <img src={data.url} alt={data.title} />
      </div>
    </div>
    </>

  )
}

export default Data