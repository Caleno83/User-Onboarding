import React, { useState} from 'react';
import './App.css';
import Form from "./components/Form"

function App() {

  //This is the state property that I stated to initiliazed and get the new data display to the DOM
  
const [users, setUsers] = useState([]);
  
  return (
    <div className="app">
      <h1>User Onboarding</h1>
      <div className="form">
      <Form users={users} setUsers={setUsers}/>
      </div>
    </div>
  );
}

export default App;
