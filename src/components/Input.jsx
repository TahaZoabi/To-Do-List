// eslint-disable-next-line react/prop-types
function Input({ onChangeInput, onAddButton, value }) {
  return (
    <div className="flex justify-center gap-2  items-center border-black-2 rounded">
      <input
        value={value}
        onChange={onChangeInput}
        type="text"
        placeholder="add todo..."
        className="flex h-10 w-[400px] rounded-lg border border-input bg-white px-3 py-2 text-sm file:border-0  file:text-sm    focus-visible:outline-none focus-visible:ring-2 "
      />
      <button
        onClick={onAddButton}
        className="bg-amber-100 py-2 px-4 rounded-lg border-none hover:bg-amber-300"
      >
        Add
      </button>
    </div>
  );
}

export default Input;
