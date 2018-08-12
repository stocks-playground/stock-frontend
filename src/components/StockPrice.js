import React, { Component } from 'react';

function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  };
}

class StockPrice extends Component {
  componentDidMount() {
    this.props.dispatch(addTodo('Read the docs'));
  }

  render() {
    const { data } = this.props;
    return (
      <div>data</div>
      //   <div>
      //     <p> test </p>
      //   </div>
    );
  }
}

export default StockPrice;
