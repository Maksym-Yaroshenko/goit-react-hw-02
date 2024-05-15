import { useEffect, useState } from "react";
import "./App.css";

import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import PositiveFeedback from "../PositiveFeedback/PositiveFeedback";

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

  const positiveFeedback = Math.round(
    (feedbackTypes.good / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        feedbackTypes={feedbackTypes}
        setFeedbackTypes={setFeedbackTypes}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <>
          <Feedback feedbackTypes={feedbackTypes} />
          <PositiveFeedback positiveFeedback={positiveFeedback} />
        </>
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
