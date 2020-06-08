import React from 'react';
import './styles/style.scss'

// Import compoennts
import Routes from './components/views/routes';
import NavBar from './components/molecules/navbar';

function App ( props ) {
  return (
    <React.Fragment>
      {/* <NavBar/> */}
      <Routes />
    </React.Fragment>
  );
}



export default App;
