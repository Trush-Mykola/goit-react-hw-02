import css from "./Feedback.module.css";

const Feedback = ({ reviewsValue, feedbackPercentage }) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>Good: {reviewsValue.good}</li>
      <li className={css.item}>Neutral: {reviewsValue.neutral}</li>
      <li className={css.item}>Bad: {reviewsValue.bad}</li>
      <li className={css.item}>Positive: {feedbackPercentage}%</li>
    </ul>
  );
};

export default Feedback;
