import React,{ useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
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
        <Typography variant="h2">{data.title}</Typography>
        <Typography variant="body1" style={{margin: '20px'}}>{data.explanation}</Typography>
        <div className='photo'>
          <CardMedia>

           <img src={data.url} alt={data.title} />
          </CardMedia>
        </div>
      </div>
    </div>
    </>

  )
}

export default Data