//React Element is an object and not and HTML

import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div",
        { id: "child" },[
        React.createElement("h1",{key: "unique-key-h1"},"I'm an h1 tag"),
        React.createElement("h2",{key: "unique-key2-h1"},"I'm an h2 tag"),
    ]),
        React.createElement("div",
        { id: "child2" },[
        React.createElement("h1",{key: "unique-key-h2"},"I'm an h1 tag"),
        React.createElement("h2",{key: "unique-key2-h2"},"I'm an h2 tag"),
    ])
)


// const heading = React.createElement("h1",
//     { id: "heading", xyz: "abc" },
//     "Hellow World From React!!")

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)
// root.render(heading)

// console.log(heading);       //Object

