import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actions";

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

// in this object, keys become prop names,
// and values should be action creator functions.
// They get bound to `dispatch`.
const mapDispatchToProps = {
  increment,
  decrement
};

class Counter extends React.Component {
  increment = () => {
    // this.props.dispatch({ type: 'INCREMENT'})
    // this.props.dispatch(increment())
    this.props.increment();
  };

  decrement = () => {
    // this.props.dispatch(decrement())
    this.props.decrement();
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

// export default connect(mapStateToProps)(Counter);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
