import { StatisticsWraper } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <StatisticsWraper>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {percent} %</p>
    </StatisticsWraper>
  );
};
