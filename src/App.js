import Background from './components/Background';
import Body from './components/Body';
import PersonalData from './components/PersonalData';
import Menu from './components/Menu';


function App() {
  return (
    <div className="App">
      <Menu />
      <Background />
      <PersonalData />
      <Body />
    </div>
  );
}

export default App;
