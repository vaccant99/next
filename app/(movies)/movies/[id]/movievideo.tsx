
import { apiurl } from "../../../(home)/page";
import React from "react";



async function getVideos(id:string) {
  const response = await fetch( `${apiurl}/${id}/videos`)
  
  return response.json();
}

export default async function Movieinfo ( {id} :{id:string}) {
  const videos = await getVideos(id)
  return <h6>{JSON.stringify(videos)}</h6>;}