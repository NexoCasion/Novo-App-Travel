import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';

function App() {
  const [travels, setTravels] = useState([]);
  useEffect (() =>{
    axios.get("http://localhost:3001/api/v1/travels")
      .then(resposta=> setTravels(resposta.data))
      .catch(erro=> console.error(erro))
  },[])

  return (
    <div className="App">
      {
        travels.map(viagem=><h1 key={viagem.id}>{viagem.nome}</h1>)
      }
    </div>
  );
}

export default App;
