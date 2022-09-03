import { useState } from 'react';
import { BsArrowRepeat, BsFillClockFill } from 'react-icons/bs';

interface RetryProps {
  compute: () => void;
}

const ComputationRetry = ({ compute }: RetryProps) => {
  const [isComputing, setIsComputing] = useState(false);

  const disallowRetry = () => setIsComputing(true);

  const retry = () => {
    disallowRetry();
    compute();
  };

  const retryButton = (
    <button type="button" onClick={retry}>
      <BsArrowRepeat />
    </button>
  );

  const clockIcon = <BsFillClockFill />;

  const retryElement = isComputing ? clockIcon : retryButton;

  return (
    <div className="retry-container">
      <div className="retry-element">{retryElement}</div>
    </div>
  );
};

export default ComputationRetry;
