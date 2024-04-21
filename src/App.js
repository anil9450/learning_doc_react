import './App.css';

function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  );
}

function App() {
  return (
    <div className="App">
      <section>
        <h1>Amazing Sciencitist</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    </div>
  );
}

export default App;

/* 
export default function Gallery() {
  <section>
    <h1>Amazing Sciencitist</h1>
    <Profile />
    <Profile />
    <Profile />
  </section>
} 
*/