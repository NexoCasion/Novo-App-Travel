import FunctionSimples from "./componentes/FunctionSimples";
import FunctionDupla from "./componentes/FunctionDupla";
import Botao from "./componentes/layout/Botao";
import {useState} from 'react';


function Geral(){
    const [variavel,FunctionMudarVariavel]= useState(false)

return (<>

    <FunctionSimples/>
    <FunctionDupla/>
    {
        variavel ? <p>Logado</p> : <p>Deslogado</p>
    }
    <Botao classe="botao green">entrar</Botao>
    <Botao classe="botao red ">sair</Botao>
    </>
    )
}

export default Geral;