import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from "./redux/store";
import { BrowserRouter } from 'react-router-dom';

render(
    <Provider store={store}>     
        <BrowserRouter>
            <App />     
        </BrowserRouter> 
    </Provider>
    
, document.getElementById('app'))
