import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, { persistor } from './app/store/store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// const { PUBLIC_URL } = process.env;

// ReactDOM.render(
//   <App
//     store={store}
//     persistor={persistor}
//     basename={PUBLIC_URL}
//   />,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
