import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom'
import { useContentful } from './AppContext';



function Posts() {
  const { url } = useParams()
  const { client } = useContentful();

  



  

  return (
    <div> 
        <p>post.js</p>
    </div>
  )
}

export default Posts;
