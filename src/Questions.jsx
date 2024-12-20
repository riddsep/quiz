export default function Questions({ questions }) {
  console.log(questions[0]);
  return (
    <div className="progress">
      <h3>{questions[1].question}</h3>
      {questions[1].options.map((opt) => (
        <p key={opt}>{opt}</p>
      ))}
    </div>
  );
}
