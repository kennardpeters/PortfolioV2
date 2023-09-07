import React from 'react';
// import logo from './logo.svg';
import testSVG from './testSVG.svg';
// import yy from './yy.svg';
import './App.css';
import TypedList from './components/TypedList';
import Chat from './components/Chat';





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-link text-3xl font-bold">
          Testing Tailwind
        </h1>

        <br />

        <img src={testSVG} className='App-logo' alt='yy' />
        
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <br />

        <TypedList text={"Please type in a Question below."} interval={200} reTypeAllowed={true} />
        
        <br />

        <Chat />
        
        
      </header>
      </div>
  );
}

export default App;
