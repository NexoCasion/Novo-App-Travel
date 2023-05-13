import { Formatardata } from '../Fn-helpers/data.js';
import './Card.css';
import {GrTrash} from 'react-icons/gr'
import { useState } from 'react';
function Card(props) {
  const {id,data,desc,price} = props
  const [isDelete,setIsDelete] = useState(false)
  const deleteMode=()=>{
    setIsDelete(true);
    setTimeout(()=>{
      props.deleteTravel(id)
    },700)
  }
  return (
    <>
      <div className={isDelete? "card disappear": 'card'}>
        <h1>{props.nome}</h1>
        <div className="conteudoCard">
          <p>{desc}</p>
          <p>{Formatardata(data)}</p>
          <p>{price}</p>
        </div>
        <div className="bottom">
          <div className="botoes">
            <div onClick={()=>deleteMode()}>
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