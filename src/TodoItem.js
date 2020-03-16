import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{

  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    //console.log(this.props.content);

  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.content !== this.props.content)
      return true;
    else
      return false;
  }

  render() {
    const { content} = this.props;
    //console.log("content:"+content);
    return (
        <div onClick = {this.deleteItem}>
          {this.props.index+1} - {content}
        </div>
    )

  }
  deleteItem(){
    const { deleteItem, index } = this.props;
    deleteItem(index);
    //等价于this.props.deleteItem(this.props.index);
  }
}

TodoItem.propTyps = { //校验传入的数据格式
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func,
  index: PropTypes.number,
};

TodoItem.defaultProps = {
  //可以设置一个本地变量的默认值
};

export default TodoItem;
