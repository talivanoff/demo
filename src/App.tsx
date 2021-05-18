import './App.css';
import Counter from './components/counter/Counter';
import Counter2 from './components/counter2/counter2';
import Humans from './components/humans/humans';

function App() {
  return (
    <div className="app">
      <Counter />
      <Counter2 />
      <Humans />
    </div>
  );
}

export default App;
