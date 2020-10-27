import './App.css';
import CalculatorApp from './containers/CalculatorApp/CalculatorApp';
import { useState } from 'react';

const App = () => {
  const [themeMode, setThemeMode] = useState('light');
  return (
    <div className={`app ${themeMode === 'light' ? 'app-light' : 'app-dark'}`}>
      <CalculatorApp theme={themeMode} handleThemeChange={setThemeMode}/>
    </div>
  );
}

export default App;
