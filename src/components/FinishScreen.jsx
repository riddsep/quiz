import { useQuiz } from "../contexts/QuizContext";

export default function FinishScreen() {
  const { points, maxPossible, highscore, handleRestart } = useQuiz();
  const percentage = (points / maxPossible) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage >= 60 && percentage < 80) emoji = "🥉";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        {emoji}You scored <strong>{points}</strong> out of {maxPossible} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button className="btn btn-ui" onClick={handleRestart}>
        Restart
      </button>
    </>
  );
}
