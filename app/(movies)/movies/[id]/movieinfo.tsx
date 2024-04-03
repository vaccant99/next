import { apiurl } from "../../../(home)/page";
import React from "react";

async function getMovie(id:string) {
  const response = await fetch( `${apiurl}/${id}`)
  
  return response.json();
  
} 


export default async function Movieinfo ( {id} :{id:string}) {
  const movie = await getMovie(id)
  return <h6>{JSON.stringify(movie.title)}</h6>;}