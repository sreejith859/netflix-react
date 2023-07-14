import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './Rowpost.css'
import axios from '../../axios'
import {imageUrl,API_KEY } from '../constants/constants';

function RowPost(props) {
  const [movies, setMovies] =useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(() => {
   axios.get(props.url).then(Response=>{
    console.log(Response.data)
    setMovies(Response.data.results)
   }).catch(err=>{
    alert('Network Error')
   })
  }, []);
  const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        modestbranding:1,
        autoplay: 1,
        controls:0,
      },
    };
    const handleMovie = (id)=>{
      console.log(id)
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(Response=>{
        if(Response.data.results.lenght!==0){
          setUrlId(Response.data.results[0])
        }else{
          console.log('array empty')
        }
      })
    }
  return (
    <div className='row'>
      <h2 className=''>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

        )}
       

      </div>
       {urlId &&   <Youtube opts={opts} videoId={urlId.key}/>   }
    </div>
  )
}

export default RowPost
