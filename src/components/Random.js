import React,{useState} from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {

    // const[gif,setGif]=useState('');//initially empty
    // const[loading,setLoading]=useState('false');
    
    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     //fr network calls we use await
    //     // const output=await axios.get(url);
    //     const {data}=await axios.get(url);
    //     const imageSource=data.data.images.downsized_large.url;
    //   setGif(imageSource);
    //   setLoading(false);
    // }

    // useEffect( () => {
    //     fetchData();
    // },[])
    //first render only


    //just call useGif..writing all above lines is not required in this file

    const {gif,loading,fetchData}=useGif();
    function clickHandler(){
         fetchData();
    }
  return (
    <div className="w-1/2  bg-red-300 rounded-lg border border-black mt-[30px] flex flex-col 
    items-center gap-y-3">
        <h1 className='text-xl underline uppercase font-bold mt-[10px]'> Click to generate Random GIF</h1>

        {
            loading ? (<Spinner/>): (<img src={gif} width="450"></img>)
        }

       

        <button onClick={clickHandler} className="w-10/12 bg-yellow-300 text-lg py-2 rounded-lg mb-[20px]">

            Generate

        </button>
    </div>
  )
}

export default Random