// eslint-disable-next-line react/prop-types
function AddButton({ onAddButton }) {
  return (
    <button
      onClick={onAddButton}
      className="bg-amber-100 py-2 px-4 rounded-lg border-none hover:bg-amber-300"
    >
      Add
    </button>
  );
}

export default AddButton;
