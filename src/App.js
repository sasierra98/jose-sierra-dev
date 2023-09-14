import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { ReactComponent as Ellipse1 } from './Ellipse-1.svg'

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#0E185F", height: "100vh" }}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <img src='./Ellipse-1/' ></img> */}
      <Header />
      <Ellipse1 style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
    </div>
  );
}

export default App;
