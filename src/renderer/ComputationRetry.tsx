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

  if (isComputing) {
    return (
      <div className="retry-container">
        <div className="retry-element">
          <BsFillClockFill />
        </div>
      </div>
    );
  }

  return (
    <div className="retry-container">
      <button className="retry-element" type="button" onClick={retry}>
        <BsArrowRepeat />
      </button>
    </div>
  );
};

export default ComputationRetry;
