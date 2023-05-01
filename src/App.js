import React from 'react'
import { createClient } from 'contentful'


const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN
})

client.getEntries()
.then((response) => console.log(response.items))
.catch(console.error)


function App() {
  return(
    <>
      <p>hi</p>
      
    </>
  )
}

export default App
