 // const heading = React.createElement("h1", {}, "Hello welcome to react!");
 const heading = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      [
        React.createElement("h1", {id: "heading-1"}, "hello i am h1"),
        React.createElement("h2", {}, "hello i am h2"),
        React.createElement("h3", {}, "hello i am h3")

      ]
    )
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(heading);