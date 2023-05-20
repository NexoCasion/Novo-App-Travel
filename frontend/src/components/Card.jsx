import { Formatardata } from '../Fn-helpers/data.js';
import './Card.css';
import {GrTrash} from 'react-icons/gr'
import {BiEditAlt} from "react-icons/bi"
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
  const setEditing = ()=>{
    props.setTravel({
      nome: props.nome,
      data: data.slice(0,16),
      desc: desc,
      price: price
    })
    props.setEditID(id)
  }
  return (
    <>
      <div className={isDelete? "card disappear": 'card'}>
        <h1>{props.nome}</h1>
        <div className="conteudoCard">
          <p>{desc}</p>
          <p>{Formatardata(data)}</p>
          <p className='price'>{price}</p>
        </div>
        <div className="bottom">
          <div className="btns">
            <div 
              onClick={()=>deleteMode()}
              className='icons'
              id="trashDelete"
            >
              <GrTrash size={32}/>
            </div>
            <div
            id='editIcon' 
            className="icons"
            onClick={()=>setEditing()}
            >
              <BiEditAlt size={32}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card