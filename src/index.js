import App from './app';
import Header from './Header/header'

import ReactDOM from "react-dom";

ReactDOM.render(
    <div>
        <Header />
        <App />
    </div> 

, document.getElementById("root"));

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
    module.hot.accept();
}