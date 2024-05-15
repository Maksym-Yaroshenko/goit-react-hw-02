import css from "./Options.module.css";

export default function Options({
  feedbackTypes,
  setFeedbackTypes,
  totalFeedback,
}) {
  const updateFeedback = (feedback) => {
    //   if (feedback === "good") {
    //     setFeedbackTypes({
    //       ...feedbackTypes,
    //       good: feedbackTypes.good + 1,
    //     });
    //   } else if (feedback === "neutral") {
    //     setFeedbackTypes({
    //       ...feedbackTypes,
    //       neutral: feedbackTypes.neutral + 1,
    //     });
    //   } else if (feedback === "bad") {
    //     setFeedbackTypes({
    //       ...feedbackTypes,
    //       bad: feedbackTypes.bad + 1,
    //     });
    //   }

    setFeedbackTypes({
      ...feedbackTypes,
      [feedback]: feedbackTypes[feedback] + 1,
    });
  };

  return (
    <div className={css.container}>
      <button className={css.btn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.btn} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={css.btn}
          onClick={() => setFeedbackTypes({ good: 0, neutral: 0, bad: 0 })}
        >
          Reset
        </button>
      )}
    </div>
  );
}
