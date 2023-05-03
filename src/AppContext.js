import React, { createContext, useContext, useState, useEffect } from 'react';
import * as contentful from 'contentful';


// new react context
const contentfulContext = createContext();

// creates custom hook (useContentful) that gives access to my Context
export const useContentful = () => {
  return useContext(contentfulContext);
};

// ContentfulProvider is a wrapper component that provides all children with client object
// contentful client is being stored in useState via useEffect function
export const ContentfulProvider = ({ children }) => {
  const [client, setClient] = useState();

  useEffect(() => {
    const client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN
      });
    setClient(client);
  }, []);

  if (!client) {
    return <div>Loading...</div>;
  }

  return (
    <contentfulContext.Provider value={{ client }}>
      {children}
    </contentfulContext.Provider>
  );
};
