//React Element is an object and not and HTML

import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement("div",
//         { id: "child" },[
//         React.createElement("h1",{key: "unique-key-h1"},"I'm an h1 tag"),
//         React.createElement("h2",{key: "unique-key2-h1"},"I'm an h2 tag"),
//     ]),
//         React.createElement("div",
//         { id: "child2" },[
//         React.createElement("h1",{key: "unique-key-h2"},"I'm an h1 tag"),
//         React.createElement("h2",{key: "unique-key2-h2"},"I'm an h2 tag"),
//     ])
// )

// const heading = React.createElement("h1",
//     { id: "heading", xyz: "abc" },
//     "Hellow World From React!!")

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(parent)
// root.render(heading)

// console.log(heading);       //Object

//JSX - HTML-like or XML-like syntax

//JSX (transpiled before it reaches the JS)- by Parcel- by a package known as Babel
// const jsonHeading =<h1 className="head" tabIndex="1">Namaste React using JSx</h1>

//React Element
const heading = (
  <h1 className="head" tabIndex="1">
    Namaste React using JSx
  </h1>
);

const Title = () => (
  <h1 className="head" tabIndex="1">
    Namaste React using JSx
  </h1>
);

const number = 10000;

//React Component
//Class Based Components- OLD way of writing code
//Functional Components- NEW way of writing code

//React Functional Component
const HeadingComponent = () => (
  <div id="container">
    {/* //This is also known as component composition */}
    <Title />

    {/* or */}
    
    {"Calling as function"}
    {Title()}

    {/*3rd way*/}

    <Title></Title>
    <h1>{number}</h1> {/*any piece of js code can be written here!!*/}
    <h3>{100 + 200}</h3>
    <h2>{console.log("Logging here")}</h2>
    {heading}
    <h1>Functional Component In React</h1>
  </div>
);

const heading22 = <HeadingComponent />;

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)
root.render(<HeadingComponent />);

// root.render(heading22)
//img, src, anchor tag in JSX
//Note: JSX sanitize the code either by API or some other ways
