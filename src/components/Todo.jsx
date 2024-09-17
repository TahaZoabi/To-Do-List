// eslint-disable-next-line react/prop-types
function Todo({ value, onDeleteButton, editMode, edit }) {
  return (
    <div className="flex flex-col gap-7">
      {/* eslint-disable-next-line react/prop-types */}
      {value.map((todo, index) => (
        <div className="flex gap-4" key={index}>
          <p className="w-40 ">
            {editMode ? (
              <input
                value={value[index]}
                onChange={(e) => (value[index] = e.target.value)}
                type="text"
                className="flex h-10 w-[300px] rounded-lg border border-input  px-3 py-2 text-sm file:border-0    "
              />
            ) : (
              todo
            )}
          </p>
          <div className="flex gap-2">
            <button onClick={() => edit()}>{editMode ? "Save" : "Edit"}</button>
            <button onClick={() => onDeleteButton(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
