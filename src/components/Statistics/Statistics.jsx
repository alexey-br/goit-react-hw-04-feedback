import PropTypes from 'prop-types';
import Box from 'components/Box';
import { StatItem } from './Statistics.styled';

export default function Statistics({ state, total, positivePercentage }) {
  const options = Object.keys(state);
  return (
    <Box as="ul" p={0} m={0}>
      {options.map((option, idx) => (
        <StatItem key={idx}>option: {state[option]}</StatItem>
      ))}
      <StatItem>Total: {total}</StatItem>
      <StatItem>Positive feedback: {total ? positivePercentage : 0}%</StatItem>
    </Box>
  );
}

Statistics.propTypes = {
  state: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
