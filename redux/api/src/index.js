import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons.min';
import 'uikit/dist/css/uikit.min.css';
import * as serviceWorker from './serviceWorker';

UIkit.use(Icons);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
