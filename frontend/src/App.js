import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Popup from './components/Popup';

function App() {
  const [travels, setTravels] = useState([]);
  const [travel, setTravel] = useState({nome:''});
  const [editId,setEditID]= useState(-1);
  const [showPopup,setshowPopup]= useState(false);
  const [popupContent,setPopupContent]= useState({message: '',color:""});

  function showAndHidePopup(){
    setshowPopup(true);
    setTimeout(()=>{
      setshowPopup(false);
    },3500)
  }

  useEffect (() =>{
    axios.get("http://localhost:3001/api/v1/travels")
      .then(resposta=> setTravels(resposta.data))
      .catch(erro=> console.error(erro))
  },[])

const deleteTravel = (id)=>{
  axios.delete(`http://localhost:3001/api/v1/travels/${id}`)
  .then(res=>{
    console.log(res.data)
    setTravels(travels.filter(t=>t.id !== id))
    setTravel({
      nome: '',
      data: '',
      price: '',
      desc: '',
    })
    setEditID(-1)
    setPopupContent({message: res.data.message,color:"sucess"})
    showAndHidePopup();
  })
  .catch(erro=>{
    console.log("Erro ao deletar")
    setPopupContent({message: "Erro ao deletar",color:"warning"})
    showAndHidePopup()
  })
}
const editTravel=(id,travel)=>{
axios.put(`http://localhost:3001/api/v1/travels/${id}`,{travel})
.then(res=>{
  let newListadeViagens = travels.map(v=>{
    if (v.id === id){
      return res.data
    } 
    return v
  })
  setTravels(newListadeViagens)
  setPopupContent({message: "Editado com sucesso",color:"sucess"})
  showAndHidePopup()
})
.catch(erro=>{
  console.log(erro)
  setPopupContent({message: erro.message,color:"warning"})
  showAndHidePopup()
})
}

function CadastrarViagem(travel){
  axios.post('http://localhost:3001/api/v1/travels',{travel})
  .then(res=>{
    console.log(res.data)
    setTravels([...travels,res.data])
    setTravel({
      nome: '',
      data: '',
      price: '',
      desc: '',
    })
    setPopupContent({message: "Cadastrado com sucesso!",color:"sucess"})
    showAndHidePopup()
  })
  .catch(error=>console.log(error))
  setPopupContent({message: erro.message,color:"warning"})
  showAndHidePopup()
}

function EnvioFormulario(event){
  event.preventDefault();
  if (editId !== -1){
    editTravel(editId,travel)
    setEditID(-1)
    setTravel({
      nome: '',
      data: '',
      price: '',
      desc: '',
    })
    return
  }
  CadastrarViagem(travel);
}

  return (
    <div className="App">
      <Form
        travel={travel}
        setTravel={setTravel}
        EnvioFormulario={EnvioFormulario}
        id={editId}
      />
      <div className='cards'>
      {
        travels.map(viagem=>
          <Card
          deleteTravel={deleteTravel}
          key={viagem.id}
          id={viagem.id}
          nome={viagem.nome}
          data={viagem.data}
          desc={viagem.desc}
          price={viagem.price}
          setEditID={setEditID}
          setTravel={setTravel}
          />
          )
      }
      {showPopup?
        <Popup
        message= {popupContent.message}
        color= {popupContent.color}
        />
        :null

      }
      </div>
    </div>
  );
}

export default App;
