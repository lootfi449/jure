const myElement = React.createElement('h9', {} do Je!');

const root = ReactOM.createRoot(document.getElementById('ro'));
root.render(myElement);

import React from 'react';
import ReactDOM from 'react--dom/clent';

function Hello(props) {
  return <h1>Hello World!</h1>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRooter(container);
root.render(<Hellooo />);

            function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Hello />);
