import "./Form.css";

function Form({EnvioFormulario,travel,setTravel}){
  return(
    <>
      <div className="divForm">
        <form onSubmit={EnvioFormulario}>
          <label >Nome</label>
          <input 
            id="nome"
            required
            value={travel.nome}
            placeholder='Nome da viagem'
            onChange={(e)=>setTravel({...travel,nome: e.target.value})}
          />
          <label >Descrição</label>
          <textarea
            required
            id= "desc"
            onChange={(e)=>setTravel({...travel,desc: e.target.value})}
            value={travel.desc}
            placeholder='Descrição da viagem'
          />
          <label >Data da viagem</label>
          <input
            required
            type='datetime-local'
            id="data"
            value={travel.data}
            placeholder='Data'
            onChange={(e)=>setTravel({...travel,data: e.target.value})}
            />
          <label >Preço</label>
          <input
            id='price'
            required
            value={travel.price}
            placeholder='Preço'
            type='number'
            onChange={(e)=>setTravel({...travel,price: e.target.value})}
            />
          <button>Cadastrar Viagem</button>
        </form>
      </div>
    </>
  )
}

export default Form;