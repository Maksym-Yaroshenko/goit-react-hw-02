import { useEffect, useState } from "react";
import "./App.css";

import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";

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
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        setFeedbackTypes={setFeedbackTypes}
        totalFeedback={totalFeedback}
      />

      <Feedback feedbackTypes={feedbackTypes} totalFeedback={totalFeedback} />
    </>
  );
}

export default App;
