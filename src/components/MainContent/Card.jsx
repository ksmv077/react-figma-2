import styles from './MainContent.module.css'





const Card = ({name, price, image}) => {
    return (
        <div className={styles.card}>
            <div className={styles.photo}><img src={image} alt="" /></div>
            <div><h1>{price}</h1></div>
            <div className={styles.name}><p>{name}</p></div> 
            <button className={styles.button}>Купить</button>
        </div>
    );
}

export default Card;