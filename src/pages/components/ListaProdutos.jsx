import styles from '../../styles/Lista.module.css'


export default function Lista({lista}) {
return(
<>
<ul className={styles.bloco}>
{lista.map(produto=> 
<div className={styles.container}>
  <li className={styles.produtos} key={produto.id}>
   <h2>{produto.title}</h2>
    <p>{produto.description}</p>
    <p>Preço: R${produto.price}</p>
    <img src={produto.image} alt={produto.title} width={100}/>
 </li>
 </div>
)}
</ul>
</>
)
}