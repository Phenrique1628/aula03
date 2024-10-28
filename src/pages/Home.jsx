import { useEffect, useState } from "react";
import ListaProdutos from './components/ListaProdutos'
export default function Home() {
 const [lista, setLista] = useState([]);

    useEffect(()=>{
        const receberListaProdutos = async () =>{

        try{
        const resposta = await fetch('https://fakestoreapi.com/products')
        const dados = await resposta.json();
        setLista(dados);
        }catch (erro){
         alert('Você pensa que o Vasco é time!')
        }
        }
        receberListaProdutos();
    }, []);


    return(
<>
<h1>Lista dos Produtos</h1>
<ListaProdutos lista={lista}/>
</>
);
}

