import React from "react";
const Package = (props) => {
    return (
        <li>
            <i className={props.icon}></i>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </li>
    );
}

export default Package;