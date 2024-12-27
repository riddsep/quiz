import { useQuiz } from "../contexts/QuizContext";

export default function Option() {
  const { questions, index, handleNewAnswer, answer } = useQuiz();
  const hasAnswer = answer !== null;
  const question = questions[index];
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          disabled={hasAnswer}
          className={`
            btn btn-option ${
              hasAnswer
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            } 
            ${index === answer ? "answer" : ""}`}
          onClick={() => handleNewAnswer(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
