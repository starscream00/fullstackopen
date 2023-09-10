export default function Filter({ filterString, filterHandler }) {
  return (
    <div>
      filter by name :{" "}
      <input
        value={filterString}
        onChange={filterHandler}
      />
    </div>
  );
}
