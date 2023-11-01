import { WaitStatistic } from './Notification.style';

export const Notification = ({ message }) => {
  return (
    <WaitStatistic>
      <p>{message}</p>
    </WaitStatistic>
  );
};
