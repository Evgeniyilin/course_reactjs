import React from "react"
import ReactDOM from "react-dom"

// ReactDOM.render(<div><h1>Привет!</h1><h3>Hello</h3></div>, document.getElementById("dapp"))

const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse Over")

const helpText = "Help text"

const elements = (<div className="Name">
    <h1>{helpText}</h1>
    <input placeholder={helpText}
        onClick={inputClick} onMouseEnter={mouseOver} />
    <p>{helpText === "Help text" ? "Yes" : "No"}</p>
    </div>)

const app = document.getElementById("dapp")

ReactDOM.render(elements, app)
