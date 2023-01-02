import styles from './Buttom.module.scss'

const tgWebApp = window.Telegram.WebApp;

export default function Buttons () {
    function onCkick() {
        alert(tgWebApp.initDataUnsafe);
    }

    return (
        <button  className={styles.ButtonBlue} onClick={onCkick}>Click Me!!</button>
    )
}