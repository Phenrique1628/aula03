import styles from '../../styles/Lista.module.css'


export default function Lista({lista}) {
return(
<>
<h1>Lista Produtos</h1>
<ul className={styles.bloco}>
{lista.map(produto=> 
  <li className={styles.produtos} key={produto.id}>
   <h2>{produto.title}</h2>
    <p>{produto.description}</p>
    <p>Preço: R${produto.price}</p>
    <img src={produto.image} alt={produto.title} width={100}/>
 </li>
)}
</ul>
</>
)
}