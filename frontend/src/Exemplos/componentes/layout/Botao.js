import './Botao.css'

function Botao(props){
    return(
        <button className={props.classe}>
            {props.children}
        </button>
    )
}
export default Botao