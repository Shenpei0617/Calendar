import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Search from './JS/search'
import './App.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='wrap'>
      <Search />
      <App />
    </div>
    
  </React.StrictMode>
);


