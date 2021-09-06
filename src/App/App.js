import logo from '../pics/logo.png';
import './App.css';
import LocateDog from '../LocateDog/LocateDog'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <h1>
        Find a Hot Dog near you!
      </h1>
      </header>
      <LocateDog />
    </div>
  );
}

export default App;
