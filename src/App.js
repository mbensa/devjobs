import './App.css';
import Header from './components/Header';
import InputBox from './components/InputBox';

export default function App() {
  return (
    <div className="App">
      <Header />
      <InputBox 
        id='searchByTitle'
        inputName='title'
        placeholder='Filter by title'
        icon = 'search'
        


        />
    </div>
  );
}
