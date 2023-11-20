import React from "react";

export default class AboutClass extends React.Component {
  // first child constructor will call
  constructor(props) {
    // constructor is good way to fetching props data or parameters
    super(props);

    this.state = {
      //it contains all state variables as big state object
      count: 0, //it is first state variable
      count2: 1, //it is second state variable
    };

    console.log(this.props.text + "constructor render");
  }
  // third is react update DOM
  //forth child componentDidMount will call if we want api calls
  componentDidMount() {
    console.log(this.props.text + "componentDidMount render");
  }

  //   second child render method will call
  render() {
    console.log(this.props.text + "render");
    const { count, count2 } = this.state; // i destructure it
    return (
      <>
        <div>{this.props.text}</div>
        <h1> count :{count}</h1>
        <button
          onClick={() =>
            this.setState({
              //never update state variable directly you should use setState for updationg the state variable
              count: this.state.count + 1, // if you want to update only one state then you can without writing other one
              count2: this.state.count2 - 1,
            })
          }>
          Increment
        </button>
        <h2>count2: {count2}</h2>
      </>
    );
  }
}
