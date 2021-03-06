import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Simplerdux from 'simplerdux'
import HWApiFetch from 'hw-api-fetch'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './scss/style.scss'

HWApiFetch.init({
  host: 'https://restcountries.eu/rest/v2/',
  noContentType: true,
  log: true,
})

ReactDOM.render(<Simplerdux.Provider app={App} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();