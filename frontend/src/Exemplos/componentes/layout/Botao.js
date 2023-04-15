import './Botao.css'

function Botao(props){
    return(
        <button onClick={props.tarefa} className={props.classe}>
            {props.children}
        </button>
    )
}
export default Botao