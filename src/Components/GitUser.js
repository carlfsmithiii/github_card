import React from "react";
import "./GitUser.css";

export default function GitUser(props) {
  return (
    <div>
      <div className="user-display">
        <img src={props.avatar_url} alt="abstract marker" />
        <div className="user-text-info">
          <h2>{props.login}</h2>
          <p>Type: {props.type}</p>
          <p>
            URL: <a href={props.html_url}>{props.html_url}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
