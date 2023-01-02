import react from 'react'
import styles from './header.scss';

const Header = () => {
    return (
        <section className={styles.wrapper}>
            <nav className={styles.headerNav}>
                <div className={styles.logo}>
                    <img src="./logo65-130.png" alt="Logo" />
                </div>
                <menu className={styles.headerMenu}>
                    <li className={styles.headerListItem}><a href="#" className={styles.headerLink}>Главная</a></li>
                    <li className={styles.headerListItem}><a href="#" className={styles.headerLink}>О нас</a></li>
                    <li className={styles.headerListItem}><a href="#" className={styles.headerLink}>О вас</a></li>
                    <li className={styles.headerListItem}><a href="#" className={styles.headerLink}>Обо всех</a></li>
                </menu>
                <div className={styles.headerRight}><p>380679264662</p></div>
            </nav>
        </section>
    )
}
export default Header;