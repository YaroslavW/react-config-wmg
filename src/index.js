import React from "react";
import ReactDOM from "react-dom";
import "./style/main.less";

class Welcome extends React.Component {
    render () {
        return (
            <>
            <h1 className="header">Hello World from React boilerplate</h1>
            <p>Hello React with Less</p>
            </>
        );
    }
}

ReactDOM.render(<Welcome />, document.getElementById("root"));
