import FunctionSimples from "./componentes/FunctionSimples";
import FunctionDupla from "./componentes/FunctionDupla";
import Botao from "./componentes/layout/Botao";
import {useState,useEffect} from 'react';


function Geral(){
    const [variavel,FunctionMudarVariavel]= useState(false)

    const Logar = ()=>{
        FunctionMudarVariavel(true)
    }

    const Deslogar = ()=>{
        FunctionMudarVariavel(false)
    }
    useEffect(()=>{
        console.log("renderizei a primeira vez")
    },[variavel])
    return (<>

    <FunctionSimples/>
    <FunctionDupla/>
    {
        variavel ? <p>Logado</p> : <p>Deslogado</p>
    }
    <Botao tarefa={Logar} classe="botao green">entrar</Botao>
    <Botao tarefa={Deslogar} classe="botao red ">sair</Botao>
    </>
    )
}

export default Geral;