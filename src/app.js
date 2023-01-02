import React from 'react';
import styles from './styles.scss';


const tgWebApp = window.Telegram.WebApp;

const onClickEvent = (e) => {
    e.preventDefault();
    tgWebApp.close();
}

const App = () => {
    return (
        <div className={styles.content}>
        <div className={styles.label}>
            Create React App Without CRA😊
        </div>
        <button className={styles.btn} onClick={onClickEvent}>Click Me 😎</button>
    </div>
    )
}

export default App