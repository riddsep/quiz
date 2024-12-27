import { useQuiz } from "../contexts/QuizContext";
import Option from "./Option";

export default function Questions() {
  const { questions, index } = useQuiz();
  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Option />
    </div>
  );
}
