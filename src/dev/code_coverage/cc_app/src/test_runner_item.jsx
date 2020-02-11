import React from "react";

export default function TestRunnerItem ({historicalItem, testRunnerItem}) {
  return (
    <div>
      <div>
        {testRunnerItem.type}
      </div>
      <a
        className="App-link"
        href={href(testRunnerItem.type)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {timestamp(historicalItem)}
      </a>
    </div>
  );
}

function timestamp(historicalItem) {
  return [.../coverage\/\d*\/(\d*-.*Z)/gm.exec(historicalItem)][1];
}

function href(type) {
  return `target/kibana-coverage/${type}-combined/index.html`;
}
