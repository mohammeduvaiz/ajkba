import './App.css';
import Hero from './components/Hero';
import Program from './components/programs/programs';
import Reasons from './components/reasons/Reason';
import Winners from './components/winners/Winners';

function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reasons />
      <Winners />
    </div>
  );
}

export default App;
