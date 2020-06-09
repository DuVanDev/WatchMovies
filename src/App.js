import React from 'react';
import './styles/style.scss'

// Import compoennts
import Routes from './components/views/routes';
import NavBar from './components/molecules/navbar';
import MainPage from './components/views/mainPage';

function App ( props ) {
  return (
    <React.Fragment>
      <MainPage
        header={<NavBar />}
        content={<Routes />}
      />
    </React.Fragment>
  );
}



export default App;
