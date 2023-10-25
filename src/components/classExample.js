import axios from "axios";
import { Component } from "react";
import Card from "./Card";

class FirstExample extends Component {
  constructor() {
    super();
    this.state = {
      data: "Class Component",
      data2: [],
    };
    // this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler() {
    this.setState({
      data: "Class changed",
    });
  }

  //   UseEffect fn in class = componentDidMount & componentDidUpdate
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      this.setState({
        data2: res.data,
      });
      console.log(this.state.data2);
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.data}</h1>
        <button onClick={() => this.changeHandler()}>Change</button>
        {/* <button onClick={this.changeHandler}>Change</button> */}
        {this.state.data2.map((ele) => (
          <Card Name={ele.name} Email={ele.email} Mobile={ele.phone} />
        ))}
      </>
    );
  }
}

export default FirstExample;
