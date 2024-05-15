import PositiveFeedback from "../PositiveFeedback/PositiveFeedback";
import Notification from "../Notification/Notification";

export default function Feedback({
  feedbackTypes: { good, neutral, bad },
  totalFeedback,
}) {
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <>
      {totalFeedback > 0 ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <PositiveFeedback positiveFeedback={positiveFeedback} />
        </>
      ) : (
        <Notification />
      )}
    </>
  );
}
