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
