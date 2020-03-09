import React, {Component} from 'react';

class TodoItem extends Component{

  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    //console.log(this.props.content);

  }

  render() {
    //const { content } = this.props;
    console.log(this.props.content);
    return (
        <div onClick = {this.deleteItem}>
          {this.props.content}
        </div>
    )

  }
  deleteItem(){
    const { deleteItem, index } = this.props;
    deleteItem(index);
    //等价于this.props.deleteItem(this.props.index);
  }
}

export default TodoItem;
