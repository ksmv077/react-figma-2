import img from '../fhoto/cozina-img.png'
import styles from './Header.module.css'





const Header = () => {
    return(
        <div className={styles.header}>
            <div className={styles.header_text}>
                <div className={styles.header_text_update}>Intocode Coding Shopcamp</div>
            </div>
            <div className={styles.header_img}><img src={img} alt="" /></div>
        </div>
    )
}
export default Header