import './App.css';
import Gallery, { Namephotos, Photo } from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Gallery />
      <Photo />
      <Namephotos />
    </div>
  );
}

export default App;