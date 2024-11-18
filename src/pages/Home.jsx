import { useEffect, useState } from "react";
import ListaProdutos from './components/ListaProdutos';
import styles from '../styles/Lista.module.css'
export default function Home() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const receberListaProdutos = async () => {

            try {
                const resposta = await fetch('https://fakestoreapi.com/products')
                const dados = await resposta.json();
                setLista(dados);
            } catch (erro) {
                alert('Algo deu errado!')
            }
        }
        receberListaProdutos();
    }, []);

    const ordenarDeAaZ = () =>{
        const ListaAux = [...lista].sort((a,b) => a.title.localeCompare(b.title));
        setLista(ListaAux);
    }

    const ordenarDeZaA = () =>{
        const ListaAux = [...lista].sort((a,b) => b.title.localeCompare(a.title));
        setLista(ListaAux);
    }

    const PrecoMaiorMenor = () =>{
        const ListaAux = [...lista].sort((a,b) => b.price - a.price);
        setLista(ListaAux);
    }

    const PrecoMenorMaior = () =>{
        const ListaAux = [...lista].sort((a,b) => a.price - b.price);
        setLista(ListaAux);
    }

 
    return (
        <>
            <h1 className={styles.titulo}>Lista dos Produtos</h1>
            <button className={styles.botao} onClick={() => ordenarDeAaZ()}>A-Z</button>
            <button className={styles.botao} onClick={() => ordenarDeZaA()}>Z-A</button>
            <button className={styles.botao} onClick={() => PrecoMaiorMenor()}>Maior - Menor</button>
            <button className={styles.botao} onClick={() => PrecoMenorMaior()}>Menor - Maior</button>
            <ListaProdutos lista={lista} />
        </>
    );
}

