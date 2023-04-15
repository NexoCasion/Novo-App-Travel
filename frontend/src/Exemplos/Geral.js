import FunctionSimples from "./componentes/FunctionSimples";
import FunctionDupla from "./componentes/FunctionDupla";
import Botao from "./componentes/layout/Botao";


function Geral(){
return (<>

    <FunctionSimples/>
    <FunctionDupla/>    
    <Botao>Entrar</Botao>
    <Botao>Sair</Botao>
    </>
    )
}

export default Geral;