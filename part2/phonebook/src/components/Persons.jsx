export default function Persons({ filterString, filtered, persons }) {
  return (
    <ul>
      {filterString.length > 0
        ? filtered.map((person) => (
            <li key={person.id}>{person.name + " : " + person.number}</li>
          ))
        : persons.map((person) => (
            <li key={person.id}>{person.name + " : " + person.number}</li>
          ))}
    </ul>
  );
}
