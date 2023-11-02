import { ButtonWraper } from './FeedbackOptions.styled';
import { nanoid } from 'nanoid';
import titleize from 'titleize';

export const FeedbackOptions = ({ leaveFeedback, options }) => {
  return (
    <ButtonWraper>
      {options.map(option => (
        <button
          key={nanoid()}
          type="button"
          onClick={() => {
            leaveFeedback(`${option}`);
          }}
        >
          {titleize(`${option}`)}
        </button>
      ))}
    </ButtonWraper>
  );
};
