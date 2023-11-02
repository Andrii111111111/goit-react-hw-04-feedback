import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { useState } from "react";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";


export const App =()=>  {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
  


  const leaveFeedback = (option) => {
    
    if (option === 'good') {
      setGood((prevGoood) => prevGoood+1)
    }
    if (option === 'neutral') {
      setNeutral((prevNeutral) => prevNeutral+1)
    }
    if (option === 'bad') {
      setBad((prevBad) => prevBad+1)
    }
  };
    

  const countTotalFeedback = () => {
  return good + neutral + bad
  };
  
  const countPositiveFeedbackPercentage = () => {
      return Math.round(good / countTotalFeedback() * 100) || 0
  };

    const options = ['good', 'neutral', 'bad']
  return (
   
    <>
      <Section title="Please leave feedback">
      <FeedbackOptions  
       leaveFeedback={leaveFeedback}
        options ={options}/></Section>
      <Section title="Statistics">
       { countTotalFeedback() === 0 ?(<Notification message="There is no feedback"/>) :(<Statistics good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        percent = {countPositiveFeedbackPercentage()}
        />)}
      </Section>
    </>)


}



