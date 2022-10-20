import { useReducer } from 'react';
import Box from './Box';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';
import FeedbackOptions from './FeedbackOptions';

const initialState = { good: 0, neutral: 0, bad: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'good':
      return { ...state, good: state.good + 1 };
    case 'neutral':
      return { ...state, neutral: state.neutral + 1 };
    case 'bad':
      return { ...state, bad: state.bad + 1 };
    default:
      console.log('wrong option');
  }
}

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, item) => acc + item, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good / countTotalFeedback()) * 100);
  };

  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();

  return (
    <Box p={4}>
      <Section title="Please leave feedback:">
        <FeedbackOptions options={Object.keys(state)} action={dispatch} />
      </Section>

      <Section title="Statistics:">
        {total ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={total}
            positivePercentage={positive}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Box>
  );
}
