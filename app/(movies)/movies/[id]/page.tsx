
import React, { Suspense } from "react"
import Movieinfo from "./movieinfo";
import Movievideos from "./movievideo";




export default async function MovieDetail ({params:{id}} : {params:{id:string} }) {
   
   
   
   
  return <div>
    <Suspense fallback={<h1>loading</h1>}>
      {/* @ts-expect-error Async Server Component */}
    <Movieinfo id={id} />
    </Suspense>
<Suspense>
  {/* @ts-expect-error Async Server Component */}
    <Movievideos id={id}/>
</Suspense>

  </div>

  
} 