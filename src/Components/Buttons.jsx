import styles from './Buttom.module.scss'


export default function Buttons () {
    function onCkick() {
        alert("Is working!!");
    }

    return (
        <button  className={styles.ButtonBlue} onClick={onCkick}>Click Me!!</button>
    )
}