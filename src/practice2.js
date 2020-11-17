/* import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };
  state2 = {
    count: 10,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };//minus(){}이런 형식으로 쓰면 실행이 안되는 듯

  //class는 return 대신 render()
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
} //this.minus()는 즉발이라 클릭 안해도 실행됨

export default App;
 */
