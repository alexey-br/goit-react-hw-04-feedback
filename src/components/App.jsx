import { useReducer } from 'react';
import Box from './Box';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';
import FeedbackOptions from './FeedbackOptions';

const initialState = { good: 0, neutral: 0, bad: 0 };

function reducer(state, { type }) {
  const newState = { ...state };
  newState[type] = state[type] + 1;
  return newState;
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
            state={state}
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
