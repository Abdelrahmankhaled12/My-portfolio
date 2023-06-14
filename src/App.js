import Background from './components/Background';
import Body from './components/Body';
import PersonalData from './components/PersonalData';
import Menu from './components/Menu';
import MenuButton from './components/MenuButton';
import Spinner from './components/Spinner';

import { useState, useEffect } from 'react';

function App() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 4000);
  }, []);

  let bodyAPP = <>
    <MenuButton />
    <div id='body'>
      <Menu />
      <Background />
      <PersonalData />
      <Body />
    </div>
  </>
  return (
    <div className="App">
      {showSpinner ? <Spinner />  : bodyAPP }
    </div>
  );
}

export default App;
