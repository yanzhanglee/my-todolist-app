import React, { Component } from 'react';

class Test extends Component {
// 父组件的render函数执行时，子组件的render函数也会被执行
    render() {
        return <div>{this.props.content}</div>
    }
}

export default Test;
