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

const Statistics = ({ stats }) => {
  return (
    <>
      <h2>Statistics</h2>
      <Stats
        label={"good"}
        value={stats.good}
      />
      <Stats
        label={"neutral"}
        value={stats.neutral}
      />
      <Stats
        label={"bad"}
        value={stats.bad}
      />
      <Stats
        label={"all"}
        value={stats.good + stats.neutral + stats.bad}
      />

      <Stats
        label={"average"}
        value={
          stats.good + stats.neutral + stats.bad
            ? (stats.good - stats.bad) /
              (stats.good + stats.neutral + stats.bad)
            : 0
        }
      />
      <Stats
        label={"positive"}
        value={
          (stats.good
            ? stats.good / (stats.good + stats.neutral + stats.bad)
            : 0) *
            100 +
          " %"
        }
      />
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  const [stats, setStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const clickHandler = (name, stats) => {
    setStats({
      ...stats,
      [name]: stats[name] + 1,
    });
  };
  return (
    <>
      <h2>Give Feedbacks</h2>

      <Button
        label={"good"}
        handleClick={() => clickHandler("good", stats)}
      />
      <Button
        label={"neutral"}
        handleClick={() => clickHandler("neutral", stats)}
      />
      <Button
        label={"bad"}
        handleClick={() => clickHandler("bad", stats)}
      />
      <Statistics stats={stats} />
    </>
  );
};

export default App;
