import Option from "./Option";

export default function Questions({ question }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Option options={question.options} />
    </div>
  );
}
