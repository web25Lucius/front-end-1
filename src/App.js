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

        <NewUserForm formValues={formValues} setFormValues={setFormValues} formErrors={formErrors} setFormErrors={setFormErrors} user={user} setUser={setUser} disabled={disabled} setDisabled={setDisabled} />

    </div>
  );
}

export default App;
