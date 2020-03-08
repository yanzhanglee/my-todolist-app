import React, { Component, Fragment } from 'react';
import './style.css'

class TodoList extends Component{

  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'Enter your To-do',
      list: ['学习React 60分钟','学习Rhino 60分钟']
    }
  }

  render() {
    return(
        <Fragment>
          <div>
            <label htmlFor="insertArea">Do:</label>
            <input
                id = "insertArea"
                className = 'input'
                value = {this.state.inputValue}
                onChange = {this.handleInputChange.bind(this)}//将函数绑定至render()中的this
            />
            <button
                onClick = {this.handleBtnClick.bind(this)}
            >Add</button>
          </div>
          <ul>
            {
              this.state.list.map((item,index) =>{//map()循环函数
                return(
                    <li
                        key={index}
                        //dangerouslySetInnerHTML = {{__html: item}}
                    >{item}
                      <button
                          onClick = {this.deleteItem.bind(this, index)}
                      > DEL </button>
                    </li>
                )
              })
            }
          </ul>
        </Fragment>
    )
  }

  handleInputChange(e){
    //console.log(e.target.value);
    this.setState({ //用这个方法来改变this.state中变量的值
      inputValue: e.target.value
    })
  }

  handleBtnClick(){
    if(this.state.inputValue !== ''){
      this.setState({
        list: [this.state.inputValue, ...this.state.list],
        inputValue: ''
      })
    }
  }

  deleteItem(index){
    const list = [...this.state.list];
    list.splice(index,1);//splice()删除数组中的某一项
    this.setState({
      list: list
    })
  }

}

export default TodoList;
