import {useEffect, useState} from 'react'
import api from '../API'

function MovieCard(){
    var setDat='load'
    const [data,setData]=useState(['loading'])

useEffect(()=>{
    console.log(setDat)
    MovieResponse()
    },[])

const MovieResponse = async()=>{
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api}&query='terminator'&language=en-US&page=1&include_adult=false`)
    const response2=await response.json()
    console.log(response2.results)
    setData(response2.results)
    }
    
    
    return <p className='data'>
        {data[0].title}
    </p>
}



export default MovieCard