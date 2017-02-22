//main.js
// var bbb;
// var greeter = require('./Greeter.js');
// document.getElementById('root').appendChild(greeter());
//

//es6
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css';//使用require引入css文件

render(<Greeter />,document.getElementById('root'));