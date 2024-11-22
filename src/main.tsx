import "./index.css";
import App from "./App.tsx";
import ReactDOM from 'react-dom'
import './index.css'
import { store } from "./store/store.ts";
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)