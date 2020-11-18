import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      //새로고침하면 location이 없으므로 이걸 해줘야됨
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  } //render후에 componentDidMount가 실행됨
}
export default Detail;
