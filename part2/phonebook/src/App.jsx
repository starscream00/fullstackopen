import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
// import axios from "axios";
import services from "./services/services";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterString, setFilterString] = useState("");
  // const [filter, setFilter] = useState([]);
  const addContact = (event) => {
    event.preventDefault();
    const target = persons.find((person) => person.name === newName);
    if (target.name === newName) {
      const update = window.confirm(
        `Would you like to update ${target.name}'s number ?`
      );
      if (update) {
        services
          .put(target.id, { name: newName, number: newNumber })
          .then((res) => {
            setPersons(
              persons.map((person) => (person.name !== res.name ? person : res))
            );
          });
      }
    } else {
      services
        .post({ name: newName, number: newNumber })
        .then((res) => {
          console.log("res", res);
          setPersons(persons.concat(res));
        })
        .catch((error) => alert(error));

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
    const data = services.getAll();
    data
      .then((res) => setPersons(res))
      .catch((error) => {
        alert(error);
        console.log("error", error);
      });
    console.log("getAll");
  }, []);
  const deleteHandler = (id) => {
    const confirmation = window.confirm(
      `Are you sure you want to delete ${
        persons.find((person) => person.id === id).name
      }?`
    );
    if (confirmation) {
      services.erase(id).catch((error) => alert(error));
      const newData = services.getAll();
      newData.then((res) => setPersons(res)).catch((error) => alert(error));
    }
  };

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
        deleteHandler={deleteHandler}
      />
    </div>
  );
};

export default App;
