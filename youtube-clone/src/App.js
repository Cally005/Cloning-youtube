import React, { useState } from 'react';
import './_app.scss';
import { Container } from 'react-bootstrap'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Recommendedvidoes from './Recommendedvidoes ';
import Homescreen from './components/Screen/Homescreen';


const App=()=> {
  const[sidebar, toggleSidebar] = useState(false)

  const handleToggleSidebar =  () => toggleSidebar(value => !value)

  return (
    <div className="app">

     <Header  handleToggleSidebar={handleToggleSidebar}/>
     <div className="app__container border border-info">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
        <Container fluid className="app__main border border-warning">
        <Homescreen/>
        <Recommendedvidoes />
        </Container>
        
     </div>
    </div>
  );
}

export default App;
