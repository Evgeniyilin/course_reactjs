import React from "react"
import * as ReactDOMClient from 'react-dom/client'

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

const todiv = document.getElementById("dapp")
const app = ReactDOMClient.createRoot(todiv)

app.render(elements)