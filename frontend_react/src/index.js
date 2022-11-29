import React from 'react'; //Import react into index.js which every React app needs to have
import { ReactDOM } from 'react';

import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root')); //We are connecting our app straight to the div with an id of 'root'