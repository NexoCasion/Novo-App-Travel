import FunctionSimples from "./componentes/FunctionSimples";
import FunctionDupla from "./componentes/FunctionDupla";
import Botao from "./componentes/layout/Botao";


function Geral(){
return (<>

    <FunctionSimples/>
    <FunctionDupla/>    
    <Botao classe="botao green">entrar</Botao>
    <Botao classe="botao red ">sair</Botao>
    </>
    )
}

export default Geral;