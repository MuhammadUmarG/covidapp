import React, {useState} from 'react';
import Navbar from './components/Navbar';
import InfoPanel from './components/InfoPanel';
import FooterNav from './components/FooterNav';
function App() {

    const screenConfig = useState();
  return (
      <div>
        <Navbar />
        <InfoPanel currentScreen = {screenConfig[0]} />
        <FooterNav screenConfig = {screenConfig}/>
      </div>
  );
}

export default App;
