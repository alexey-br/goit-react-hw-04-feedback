import PropTypes from 'prop-types';
import Box from 'components/Box';
import { OptionItem, OptionBtn } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Box m={0} p={0} display={'flex'} flexGap={2} as="ul">
      {options.map((option, index) => {
        return (
          <OptionItem key={index}>
            <OptionBtn onClick={() => onLeaveFeedback(option)}>
              {option}
            </OptionBtn>
          </OptionItem>
        );
      })}
    </Box>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
