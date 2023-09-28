import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterString, setFilterString] = useState("");
  // const [filter, setFilter] = useState([]);
  const addContact = (event) => {
    event.preventDefault();
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      axios
        .post("http://localhost:3001/persons", {
          name: newName,
          number: newNumber,
        })
        .then((response) => {
          console.table(response.data);
          setPersons(persons.concat(response.data));
        });

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

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((res) => setPersons(res.data));
  }, []);
  // useEffect(() => {
  //   axios
  //     .post("http://localhost:3001/persons", {
  //       name: "M",
  //       number: "39-23-6423122",
  //     })
  //     .then((res) => );
  // }, []);

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
