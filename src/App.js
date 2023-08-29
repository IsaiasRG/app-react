import NavBar from './components/NavBar/NavBar';
import Titulo from './components/Titulo/Titulo';
import Idolos from './components/ItemListContainer/Idolos';
import './App.css';

function App() {
  return (
    <div>

      <NavBar />
      <Titulo />

      <div className='props-card'>
        
        <Idolos nombre= 'Paulo Silas' pais='Brasil' club='Barcelona' color='blue'/>
        
    </div>

    <div className='props-card'>

    <Idolos nombre= 'Leandro Romagnoli' pais='Argentina' club='San Lorenzo' color='red'/>
    
    </div>

    <div className='props-card'>

    <Idolos nombre= 'Jose Sanfilipo' pais='Argentina' club='San Lorenzo' color='blue'/>

    </div>
      
    </div>
  );
}

export default App;
