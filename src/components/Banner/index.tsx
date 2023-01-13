
import styles from './styles.module.scss'

export function Banner(){
    return(
        <div className={styles.banner}>
            <img src="/images/banner.png" alt="" />
            <div className={styles.text}>
                <h1>QUALIDADE</h1>
                <h3>e preço baixo!</h3>
            </div>
        </div>
    )
}