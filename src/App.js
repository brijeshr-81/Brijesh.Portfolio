import './App.css';
import NavBar from './components/NavBar';
import Sections from './components/Sections';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SideBar/>
      <Sections/>
    </div>
  );
}

export default App;
