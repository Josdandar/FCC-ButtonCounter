import './App.css';
import josdandaLogo from "/home/devdanda/dev-trening/react-Fcc/fcc-button-counter/src/images/josdanda-logo.png" //used as if it was a variable
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react'; //  update de state of a specific component

function App() {

  const [clickNumber, setclickNumber] = useState(0); //estado es clickNumber y useState recibe el valor inicial del estado

  const clickHandler = () => {
    setclickNumber(clickNumber + 1);
  };

  const restartCounter = () => {
    setclickNumber(0)
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img
          className="logo"
          src={josdandaLogo}
          alt="Logo"
          />
      </div>
      <div className='main-container'>
        <Counter 
        clickNumber={clickNumber} />
        <Button 
        text="Click"
        isClickButton={true}
        clickHandler={clickHandler} />
        <Button 
        text="Restart" 
        isClickButton={false}
        clickHandler={restartCounter} />
      </div>
    </div>
  );
}

export default App;
