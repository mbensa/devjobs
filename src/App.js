import './App.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import Jobs from './components/Jobs';


export default function App() {
  return (
      <div className="App">
        <Header/>
        <SearchBox />
        <Jobs/>
      </div>
  );
}
