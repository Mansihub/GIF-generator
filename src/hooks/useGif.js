import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {

   // const[tag,setTag]=useState(''); not needed as no work on tag i this file
    const[gif,setGif]=useState('');//initially empty
    const[loading,setLoading]=useState('false');
    
    async function fetchData(tag){
        setLoading(true);
        //fr network calls we use await
        // const output=await axios.get(url);
        const {data}=await axios.get(tag ? `${url}&tag=${tag}`:url);
        const imageSource=data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    }

    useEffect( () => {
        fetchData();
    },[])
    //first render only
 return {gif,loading,fetchData};
}

export default useGif