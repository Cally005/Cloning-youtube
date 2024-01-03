import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar';
import Recommendedvidoes from './Recommendedvidoes ';
function App() {
  return (
    <div className="app">

     <Header/>
     <div className='app__page'>
        <Sidebar />
        <Recommendedvidoes />
     </div>
    </div>
  );
}

export default App;
