/* eslint-disable react/prop-types */
const Header = ({ name }) => {
  return <h1>{name}</h1>;
};
const Total = ({ total }) => {
  return (
    <p>
      <b>total of {total} exercises</b>
    </p>
  );
};
const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part
          key={part.id}
          name={part.name}
          exercises={part.exercises}
        />
      ))}
    </div>
  );
};
export const Course = ({ course }) => {
  const total = course.parts.reduce((acc, { exercises }) => acc + exercises, 0);
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </>
  );
};
