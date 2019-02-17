import React, { Component } from 'react'
import { connect } from 'react-redux';
import { increment, decrement} from  '../store/actions/counterActions';

class Counter extends Component {
 
  render() {
    const { counter } = this.props
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={this.props.incrementCounter}>
          +
        </button>
        {' '}
        <button onClick={this.props.decrementCounter}>
          -
        </button>
        
      </p>
    )
  }
}

const mapStateToProps = currentState => {
  return {
    counter: currentState.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => dispatch(increment()),
    decrementCounter: () => dispatch(decrement())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
