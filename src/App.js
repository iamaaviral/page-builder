import './App.css';
import LeftPane from './components/leftPane'
import Components from './components/rightPane'
import { ContextHOC } from './context';

function App(props) {
  return (
    <div className="App">
      {ContextHOC(LeftPane)}
      {ContextHOC(Components)}
    </div>
  );
}

export default App;
