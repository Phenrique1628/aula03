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

 
    return (
        <>
            <h1 className={styles.titulo}>Lista dos Produtos</h1>
            <ListaProdutos lista={lista} />
        </>
    );
}

