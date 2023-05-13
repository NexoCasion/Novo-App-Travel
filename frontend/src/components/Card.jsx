import './Card.css';
import {GrTrash} from 'react-icons/gr'
function Card(props) {
  const {id,data,desc,price} = props
  return (
    <>
      <div className='card'>
        <h1>{props.nome}</h1>
        <div className="conteudoCard">
          <p>{desc}</p>
          <p>{data}</p>
          <p>{price}</p>
        </div>
        <div className="bottom">
          <div className="botoes">
            <div onClick={()=>props.deleteTravel(id)}>
            <GrTrash size={32}/>
            </div>
            <div className="icons">

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card