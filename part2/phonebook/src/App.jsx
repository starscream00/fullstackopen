import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
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
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      setNewName("");
      setNewNumber("");
    }
  };
  const newNameHandler = (event) => {
    setNewName(event.target.value);
  };
  const newNumberHandler = (event) => {
    setNewNumber(event.target.value.toString());
  };
  const filterHandler = (event) => {
    setFilterString(event.target.value);
  };
  const filtered = persons.filter(
    (person) =>
      (filterString.length > 0) &
      person.name.toLowerCase().includes(filterString)
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterString={filterString}
        filterHandler={filterHandler}
      />
      <h2>Add New</h2>
      <PersonForm
        addContact={addContact}
        newName={newName}
        newNameHandler={newNameHandler}
        newNumber={newNumber}
        newNumberHandler={newNumberHandler}
      />

      <h2>Numbers</h2>
      <Persons
        filterString={filterString}
        filtered={filtered}
        persons={persons}
      />
    </div>
  );
};

export default App;
