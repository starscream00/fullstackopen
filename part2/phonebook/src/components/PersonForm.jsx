export default function PersonForm({
  addContact,
  newName,
  newNameHandler,
  newNumber,
  newNumberHandler,
}) {
  return (
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
  );
}
