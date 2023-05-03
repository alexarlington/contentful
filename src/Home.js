import React, { useEffect, useState } from 'react';
import { useParams, Link} from 'react-router-dom'


function Home(props) {

  return (
    <div>
        <p>home.js</p>
        <ul>
        {props.data.map((item) => (
          <li key={item.sys.id}>
            <Link to={`/${item.fields.url}`}>{item.fields.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
