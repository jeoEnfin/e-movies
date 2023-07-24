
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import { movies,series } from './urls';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner />
     <RowPost title='movies' url={movies}/>
     <RowPost title='series' isSmall url={series}/>
    </div>
  );
}

export default App;
