import React from 'react';//只要你使用了JSX语法就要引入
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import * as serviceWorker from './serviceWorker'; //PWA Progressive Web App 让React成为App

ReactDOM.render(
    <TodoList />, document.getElementById('root')
);//将组件挂载到某个element下

serviceWorker.unregister();
