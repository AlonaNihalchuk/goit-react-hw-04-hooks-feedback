import "./App.css";
import { useState } from "react";
import FeedbackOptions from "../Feedback/FeedbackOptions ";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = (e) => {
    switch (e.target.name) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const options = ["good", "neutral", "bad"];

  return (
    <section className="feedbackSection">
      <h1>Please leave feedback</h1>
      <FeedbackOptions
        options={options}
        className="feedbackOptions"
        onIncrement={handleIncrement}
      />
      {countTotalFeedback() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="No feedback given"></Notification>
      )}
    </section>
  );
}
export default App;
