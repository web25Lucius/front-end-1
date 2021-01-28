import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import NewUserForm from './Components/NewUserForm';


  // -------------------------- INITIAL STATES ------------------------

  const initialNewUserFormValues = {
    personName: '',
    email: '',
    age: '',
    password: '',
  };

  const initialNewUserFormErrors = {
    personName: '',
    email: '',
    age: '',
    password: '',
  };

  const initialNewUserDisabled = false; // change back to true after testing

function App() {
  // --------------------------- STATES -------------------------------
  const [user, setUser] = useState({}); // empty object user

  const [newUserFormValues, setNewUserFormValues] = useState(initialNewUserFormValues); // form inputs
  const [newUserFormErrors, setNewUserFormErrors] = useState(initialNewUserFormErrors); // errors, mechanism for reset
  const [newUserDisabled, setNewUserDisabled] = useState(initialNewUserDisabled) // for button or toggle

  const [loginFormValues, setLoginFormValues] = useState({}); // form inputs
  const [loginFormErrors, setLoginFormErrors] = useState({}); // errors, mechanism for reset
  const [loginDisabled, setLoginDisabled] = useState({}) // for button or toggle



  return (
    <div className="App">

      {/* Route to Create New User Form */}
        <NewUserForm 
          user={user} 
          setUser={setUser} 
          newUserFormValues={newUserFormValues} 
          setNewUserFormValues={setNewUserFormValues} 
          newUserFormErrors={newUserFormErrors} 
          newUsersetFormErrors={setNewUserFormErrors} 
          newUserDisabled={newUserDisabled} 
          setNewUserDisabled={setNewUserDisabled} 
          />

      {/* Route to User Login Form  */}

      {/* Route to Homepage */}

    </div>
  );
}

export default App;
