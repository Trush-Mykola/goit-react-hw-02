import { useEffect, useState } from "react";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import css from "./App.module.css";

const reviews = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [reviewsValue, setReviewsValue] = useState(() => {
    const stringifyReviews = localStorage.getItem("reviews");
    const parsedViews = JSON.parse(stringifyReviews) ?? reviews;
    return parsedViews;
  });
  const updateFeedback = (feedbackType) => {
    setReviewsValue({ ...reviewsValue, [feedbackType]: reviewsValue[feedbackType] + 1 });
  };
  const resetFeedback = () => {
    setReviewsValue(reviews);
  };
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviewsValue));
  }, [reviewsValue]);
  const totalFeedback = reviewsValue.good + reviewsValue.neutral + reviewsValue.bad;
  const totalFeedbackPercentage = Math.round(((reviewsValue.good + reviewsValue.neutral) / totalFeedback) * 100);
  return (
    <div>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.text}>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      {totalFeedback === 0 ? <Notification /> : <Feedback reviewsValue={reviewsValue} feedbackPercentage={totalFeedbackPercentage} />}
    </div>
  );
};

export default App;
