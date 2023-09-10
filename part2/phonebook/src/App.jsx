import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterString, setFilterString] = useState("");
  // const [filter, setFilter] = useState([]);
  const addContact = (event) => {
    event.preventDefault();
    console.log("fired", "addContact");

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      console.log("aborted");
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      setNewName("");
      setNewNumber("");
    }
  };
  const newNameHandler = (event) => {
    console.log(event.target.value);

    setNewName(event.target.value);
  };
  const newNumberHandler = (event) => {
    console.log(event.target.value);

    setNewNumber(event.target.value.toString());
  };
  const filterHandler = (event) => {
    console.log("filter", event.target.value);
    setFilterString(event.target.value);
  };
  const filtered = persons.filter(
    (person) =>
      (filterString.length > 0) &
      person.name.toLowerCase().includes(filterString)
  );
  console.log("filtered", filtered);

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter by name :{" "}
        <input
          value={filterString}
          onChange={filterHandler}
        />
      </div>
      <h2>Add New</h2>
      <form onSubmit={addContact}>
        <div>
          name:
          <input
            value={newName}
            onChange={newNameHandler}
            required
          />
        </div>
        <div>
          Number:
          <input
            type="tel"
            value={newNumber}
            onChange={newNumberHandler}
            required
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filterString.length > 0
          ? filtered.map((person) => (
              <li key={person.id}>{person.name + " : " + person.number}</li>
            ))
          : persons.map((person) => (
              <li key={person.id}>{person.name + " : " + person.number}</li>
            ))}
      </ul>
    </div>
  );
};

export default App;
