import React, { useState} from 'react';
import './App.css';
import Form from "./components/Form"

function App() {

  //This is the state property that I stated to initiliazed and get the new data display to the DOM
  
const [users, setUsers] = useState([]);
  
  return (
    <div className="app">
      <Form users={users} setUsers={setUsers}/>
      </div>
  );
}

export default App;
