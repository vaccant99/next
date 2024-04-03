
import React from "react";
import Link from "next/link";


export const metadata ={
  title :"home"
}

export const apiurl = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies(){ 
  
  const response = await fetch(apiurl);
  const json = await response.json();
  return json;
} 

g


export default async function homepage()
{const movies = await getMovies();

return <div> {movies.map((movie)=> (<li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>)) }</div>

  
}