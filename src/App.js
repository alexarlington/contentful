import React, { useEffect, useState } from 'react';
import client from './contentful';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.getEntries()
      .then((response) => {
        setPosts(response.items);
      })
      .catch(console.error);
  }, []);

  console.log(posts)

  return (
    <div>
        <p>hi there</p>
        
        <ul>
          {posts.map(post => (
            <li key={post.sys.id}>{post.fields.name}</li>
          ))}
        </ul>

    </div>
  );
}

export default App;
