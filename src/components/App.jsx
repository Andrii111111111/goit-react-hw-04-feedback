
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Component } from "react";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";


export class App extends Component  {

   state = {
    good: 0,
    neutral: 0,
    bad: 0
  }


  leaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
    

  countTotalFeedback() {
    const {good, neutral, bad} = this.state
  return good + neutral + bad
  };
  
  countPositiveFeedbackPercentage() {
    return  Math.round( this.state.good /this.countTotalFeedback()  *100) || 0
  }

  render() {
   
    const { good, neutral, bad } = this.state
    const options = ['good', 'neutral', 'bad']
  return (
   
    <>
      <Section title="Please leave feedback">
      <FeedbackOptions  
       leaveFeedback={this.leaveFeedback}
        options ={options}/></Section>
      <Section title="Statistics">
       { this.countTotalFeedback() === 0 ?(<Notification message="There is no feedback"/>) :(<Statistics good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        percent = {this.countPositiveFeedbackPercentage()}
        />)}
      </Section>
    </>)

}
}



