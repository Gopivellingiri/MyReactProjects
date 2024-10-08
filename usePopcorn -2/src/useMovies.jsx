import React from 'react'
import { useState, useEffect } from 'react';

  const KEY = '7dc0446c'
const useMovies = (query) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(function() {
        // callback?.()
        const controller = new AbortController()
        async function fetchMovies() {
         try {setIsLoading(true)
          setError('')
         const res = await fetch(` http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, {signal: controller.signal});
    
          if(!res.ok) throw new Error('something went wrong with fetching movies')
    
         const data = await res.json();
         if (data.Response === 'False') throw new Error('Movie not found')
         setMovies(data.Search)
         setError('')
         }
         catch(err){
          console.error(err.message)
          setError(err.message)
          if(err.name !== 'AbortError') {
            setError(err.message)
           
          }
         } 
         finally{
          setIsLoading(false);
         }
        }
        if(query.length<3) {
          setMovies([])
          setError('')
          return;
        }
        // handleCloseMovie();
        fetchMovies()
        return function() {
          controller.abort()
        }
      }, [query])

      return {movies, isLoading, error}
}

export default useMovies