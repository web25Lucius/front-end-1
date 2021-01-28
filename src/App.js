import logo from './logo.svg';
import './App.css';


function App() {
  // -------------------- STATES -----------------------
  const [user, setUser] = useState({}); // empty object user
  const [formValues, setFormValues] = useState(initialFormValues); // form inputs
  const [formErrors, setFormErrors] = useState(initialFormErrors); // errors, mechanism for reset
  const [disabled, setDisabled] = useState(initialDisabled) // for button or toggle




  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
