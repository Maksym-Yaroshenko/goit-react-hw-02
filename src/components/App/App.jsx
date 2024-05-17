import { useEffect, useState } from "react";
import "./App.css";

import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import PositiveFeedback from "../PositiveFeedback/PositiveFeedback";
import Notification from "../Notification/Notification";

function App() {
  const [feedbackTypes, setFeedbackTypes] = useState(() => {
    const feedbackLocalStorage = window.localStorage.getItem("total-feedback");

    if (feedbackLocalStorage !== null) return JSON.parse(feedbackLocalStorage);

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem(
      "total-feedback",
      JSON.stringify(feedbackTypes)
    );
  }, [feedbackTypes]);

  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  const positiveFeedback =
    totalFeedback > 0
      ? Math.round((feedbackTypes.good / totalFeedback) * 100)
      : 0;

  const updateFeedback = (feedback) => {
    setFeedbackTypes({
      ...feedbackTypes,
      [feedback]: feedbackTypes[feedback] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedbackTypes({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <>
          <Feedback
            feedbackTypes={feedbackTypes}
            totalFeedback={totalFeedback}
          />
          <PositiveFeedback positiveFeedback={positiveFeedback} />
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
}

export default App;
