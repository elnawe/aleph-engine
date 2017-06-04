import React from 'react';
import ReactDOM from 'react-dom';
import Block from './components/Block';
import Sprite from '../core/sprite/sprite';

var sprite = new Sprite({sprite: [1, 2, 3]});

debugger;

ReactDOM.render(<Block />, document.getElementById('render'));
