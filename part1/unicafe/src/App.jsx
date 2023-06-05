import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.label}</button>;
};

const Stats = (props) => {
  return (
    <p>
      {props.label} {props.value}
    </p>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickHandler = (setter, newValue) => {
    setter(newValue + 1);
  };
  return (
    <>
      <h2>Give Feedbacks</h2>
      <Button
        label={"good"}
        handleClick={() => clickHandler(setGood, good)}
      />
      <Button
        label={"neutral"}
        handleClick={() => clickHandler(setNeutral, neutral)}
      />
      <Button
        label={"bad"}
        handleClick={() => clickHandler(setBad, bad)}
      />

      <h2>Statistics</h2>
      <Stats
        label={"good"}
        value={good}
      />
      <Stats
        label={"neutral"}
        value={neutral}
      />
      <Stats
        label={"bad"}
        value={bad}
      />
    </>
  );
};

export default App;
