import React from "react";
import { AboutClass } from "./index";

// export default About = () => {
//   return (
//     <div>
//       i'm about page
//       <AboutClass text={"hello i'm about class component"} />
//     </div>
//   );
// };

//if parent componet is also class component

export default class About extends React.Component {
  // first parent constructor will call
  constructor() {
    super();
    console.log("parent constructor");
  }

  // third is react update DOM
  // forth when parent render will complete properly with child coponent the parent componentDidMount will call
  componentDidMount() {
    console.log("parent componentDidMount");
  }

  // second parent render method will call
  render() {
    console.log("parent render");
    return (
      <>
        <div>I'm parent component</div>
        {/* there is a child class component so it will go to child component */}
        {/* but there is 2 childrens first react render of both componet ui (this is render phase)
         =>> both children will complete their render method and updated the DOM then move on second phase */}
        {/* then react will call componentDidMount in order list of child componets (this is commit phase) */}
        <AboutClass text={"first"} />
        <AboutClass text={"second"} />
      </>
    );
  }
}
