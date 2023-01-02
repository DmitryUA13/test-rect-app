import styles from './Buttom.module.scss'

const tgWebApp = window.Telegram.WebApp;

export default function Buttons () {
    function onCkick() {
        alert("Тебя зовут: " + tgWebApp.initDataUnsafe.user.first_name);
    }

    return (
        <button  className={styles.ButtonBlue} onClick={onCkick}>Click Me!!</button>
    )
}