import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Weather App</h1>
      <Weather/>
      <p>
       <a href='https://github.com/maryamnora/weather-react' target='_blank' rel="noreferrer"> Open-source code</a>, by Maryam</p>
      </header>
    </div>
  );
}

export default App;
