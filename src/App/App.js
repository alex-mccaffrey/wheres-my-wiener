import logo from '../pics/logo.png';
import './App.css';
import LocateDog from '../LocateDog/LocateDog';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Find a Hot Dog near you!</h1>
      </header>
      <p>This is where the search box</p>
      <ul>
        <li>Result 1</li>
        <li>Result 2</li>
        <li>Result 3</li>
        <li>Result 4</li>
      </ul>
      {/* <LocateDog /> */}
    </div>
  );
}

export default App;
