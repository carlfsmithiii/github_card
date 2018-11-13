import React from "react";

export default function GitUser(props) {
  return (
    <div>
      <div>
        <img src={props.avatar_url} alt="abstract marker" />
        <h2>{props.login}</h2>
        <p>Type: {props.type}</p>
        <p>
          URL: <a href={props.html_url}>{props.html_url}</a>
        </p>
      </div>
    </div>
  );
}
