//* import logo from './logo.svg';
import './App.css';
import Expectations from './components/Expectations';
import Interests from './components/Interests';
import Learn from './components/Learn';
import Profile from './components/Profile';
import './styles.css'

function App() {
  return (
    <div className="App">
      <div className="main-row">
        <div className="element e1">
          <Profile />
        </div>
        <div className="element e2">
          <Interests />
        </div>
        <div className="element e3">
          <Learn />
        </div>
        <div className="element e4">
          <Expectations />
        </div>
      </div>
    </div>
  );
}

export default App;



/* 
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Empezando ejercicio 1</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/
