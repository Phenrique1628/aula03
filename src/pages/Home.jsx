import { useEffect, useState } from "react";

export default function Home() {
 const [lista, setLista] = useState([]);

    useEffect(()=>{
        const receberListaProdutos = async () =>{

        try{
        const resposta = await fetch('https://fakestoreapi.com/products')
        const dados = await resposta.json();
        setLista(dados);
        }catch (erro){
         alert('Ocorreu algum erro!')
        }
        }
        receberListaProdutos();
    }, []);


    return(
<>
<h1>Lista Produtos</h1>
<ul>
{produtos.map(produto=> (
  <li key={produto.id}>
   <h2>{produto.title}</h2>
    <p>{produto.description}</p>
    <p>Preço: R${produto.price}</p>
    <img src={produto.image} alt={produto.title} width={100}/>
 </li>
))}
</ul>
</>
);
}

