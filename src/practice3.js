/* import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false }); //this는 클래스를 가르키는데 React.Component를 상속하므로
    }, 6000); //setState가 사용가능하다. 또한 객체에 book:true같은 것 추가가능
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
 */
