import React, { Component } from "react";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: undefined,
      title: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Horrible Error!");
        }
        return res.json();
      })
      .then((data) => {
        this.setState({ loading: false });
        this.setState({ title: data.title });
      })
      .catch((e) => this.setState({ error: e }));
  }

  render() {
    const { error, loading, title } = this.state;

    if (error) {
      return <h2>There was a horrible error</h2>;
    }

    return <h1>{loading ? "Loading ..." : title}</h1>;
  }
}

export default Title;
