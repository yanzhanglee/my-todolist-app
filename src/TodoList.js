import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';

import './style.css'

class TodoList extends Component{

  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'Enter your To-do',
      list: ['学习React 60分钟','学习Rhino 60分钟']
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  render() {//当组件的state或props发生改变时，render函数就会重新执行
    return(
        <Fragment>
          <div>
            <label htmlFor="insertArea">Do:</label>
            <input
                id = "insertArea"
                className = 'input'
                value = {this.state.inputValue}
                onChange = {this.handleInputChange}//将函数绑定至render()中的this,放在上面了
                //ref = {(input)=>{this.input = input}}
            />
            <button
                onClick = {this.handleBtnClick}
            >Add</button>
          </div>
          <ul>
            {this.getTodoItem()}
          </ul>
        </Fragment>
    )
  }

  componentDidMount() {
    //ajax请求一般写在该函数中
    axios.get('/api/todolist')
        .then(()=>{alert('get!')})
        .catch(()=>{alert('error!')});
  }

  getTodoItem(){
    return this.state.list.map((item,index) =>{//map()循环函数
      return(
          <TodoItem
              key = {item}
              content = {item}
              index = {index}
              deleteItem = {this.deleteItem}//父组件传递到子组件的函数必须要绑定this
          />
          )
    })
  }

  handleInputChange(e){
    //console.log("e.target.value:"+e.target.value);
    const values = e.target.value; //!!!!这里不能用大括号
    this.setState(() => ({
        inputValue: values//用这个方法来改变this.state中变量的值
    }));
    //console.log("this.state.inputValue:"+this.state.inputValue);
  }

  handleBtnClick() {
    if (this.state.inputValue !== '') {
      this.setState(() => ({
        list: [this.state.inputValue, ...this.state.list],
        inputValue: ''
      }));
      //console.log(this.state.list);
      //}
    }
  }

  deleteItem(index){
    const list = [...this.state.list];
    list.splice(index,1);//splice()删除数组中的某一项
    this.setState(()=>({
      list: list
    }))
  }

}

export default TodoList;
