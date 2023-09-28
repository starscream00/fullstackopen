export default function Persons({
  filterString,
  filtered,
  persons,
  deleteHandler,
}) {
  return (
    <ul>
      {filterString.length > 0
        ? filtered.map((person) => (
            <li key={person.id}>
              {person.name + " : " + person.number}
              <button onClick={() => deleteHandler(person.id)}>delete</button>
            </li>
          ))
        : persons.map((person) => (
            <li key={person.id}>
              {person.name + " : " + person.number}{" "}
              <button onClick={() => deleteHandler(person.id)}>delete</button>
            </li>
          ))}
    </ul>
  );
}
