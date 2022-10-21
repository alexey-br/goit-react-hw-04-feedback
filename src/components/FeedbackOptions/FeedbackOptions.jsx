import PropTypes from 'prop-types';
import { OptionItem, OptionBtn, OptionsList } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, action }) {
  return (
    <OptionsList>
      {options.map((option, index) => {
        return (
          <OptionItem key={index}>
            <OptionBtn onClick={() => action({ type: option })}>
              {option}
            </OptionBtn>
          </OptionItem>
        );
      })}
    </OptionsList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  action: PropTypes.func.isRequired,
};
