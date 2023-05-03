import React, { useEffect, useState } from 'react';
import { useParams, Link} from 'react-router-dom'
import { useContentful } from './AppContext';


function Home() {
  // useContentful hook to access the client object 
  const { client } = useContentful();
  const [fetchName, setFetchName] = useState([])

  useEffect(() => {
    client
      .getEntries({
        content_type: 'artist'
      })
      .then(response => setFetchName(response.items))
      .catch(console.error)
    }, []);

    console.log(fetchName)




  return (
    <div>
        <p>home.js</p>

        <ul>
        {fetchName.map((item) => (
          <li key={item.sys.id}>
            <Link to={`/${item.fields.url}`}>{item.fields.name}</Link>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Home;
