import './App.css';
import Gallery,
{ Avatar, List, ListofPerson, Namephotos, NewList, PeopleList, Photo, TodoList }
  from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Gallery />
      <Photo />
      <Namephotos />
      <Avatar />
      <TodoList />
      <List />
      <NewList />
      <ListofPerson />
      <PeopleList />
    </div>
  );
}

export default App;