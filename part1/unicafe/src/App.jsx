import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const StatisticLine = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};

const Statistics = ({ stats }) => {
  return (
    <>
      <h2>Statistics</h2>
      {stats.good + stats.neutral + stats.bad > 0 ? (
        <>
          <StatisticLine
            text={"good"}
            value={stats.good}
          />
          <StatisticLine
            text={"neutral"}
            value={stats.neutral}
          />
          <StatisticLine
            text={"bad"}
            value={stats.bad}
          />
          <StatisticLine
            text={"all"}
            value={stats.good + stats.neutral + stats.bad}
          />
          <StatisticLine
            text={"average"}
            value={
              stats.good + stats.neutral + stats.bad
                ? (stats.good - stats.bad) /
                  (stats.good + stats.neutral + stats.bad)
                : 0
            }
          />
          <StatisticLine
            text={"positive"}
            value={
              (stats.good
                ? stats.good / (stats.good + stats.neutral + stats.bad)
                : 0) *
                100 +
              " %"
            }
          />
        </>
      ) : (
        "Noo feedback given"
      )}
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
        text={"good"}
        handleClick={() => clickHandler("good", stats)}
      />
      <Button
        text={"neutral"}
        handleClick={() => clickHandler("neutral", stats)}
      />
      <Button
        text={"bad"}
        handleClick={() => clickHandler("bad", stats)}
      />
      <Statistics stats={stats} />
    </>
  );
};

export default App;
