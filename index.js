import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom';
import App from './src/App'
import { ContentfulProvider } from './src/AppContext'

// ContentfulProvider is a component that provides the client object to its children
//  it does this by using using the ContentfulContext.Provider in App.js

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ContentfulProvider>
    <Router>
      <App />
    </Router>
    </ContentfulProvider>
  </React.StrictMode>
)
