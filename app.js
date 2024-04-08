import React from "react";
import ReactDOM from "react-dom/client";


const root =ReactDOM.createRoot(document.getElementById("root"))
// const nestedElement=React.createElement("div",{},[React.createElement("h1",{},"H1 message"),React.createElement("h2",{},"H2 message"),
// React.createElement("h3",{},"H3 message")])
// root.render(nestedElement)

// const jsxNestedElement=(
//     <div>
//         <h1>H1 message</h1>
//         <h2>H2 message</h2>
//         <h3>H3 message</h3>
//     </div>
// )
// const C2=()=><h1 className="superhead">H0 Message</h1>;

const JsxNest=()=>(
<header>
  <h1>Main Page Title</h1>
  <img src="mdn-logo-sm.png" alt="MDN logo" />
</header>
)
root.render(<JsxNest/>)

