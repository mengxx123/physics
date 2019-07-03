import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar'
import { Button } from "yunser-ui-react"

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="default">
      </AppBar>
      <header className="App-header">
        物理
        <Button text={'haha'}></Button>
      </header>
    </div>
  );
}

export default App;
