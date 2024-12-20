export default function Option({ options }) {
  return (
    <div className="options">
      {options.map((option) => (
        <button key={option} className="btn btn-option">
          {option}
        </button>
      ))}
    </div>
  );
}
