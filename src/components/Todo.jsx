// eslint-disable-next-line react/prop-types
function Todo({ value }) {
  return (
    <div className="flex flex-col gap-7">
      {/* eslint-disable-next-line react/prop-types */}
      {value.map((todo, index) => (
        <div className="flex gap-4" key={index}>
          <p className="w-40 ">{todo}</p>
          <div className="flex gap-2">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
