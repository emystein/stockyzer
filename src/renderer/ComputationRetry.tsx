import { useState } from 'react';
import { BsArrowRepeat, BsFillClockFill } from 'react-icons/bs';

interface RetryProps {
  compute: () => void;
}

const ComputationRetry = ({ compute }: RetryProps) => {
  const [waiting, setWaiting] = useState(false);

  const startWaiting = () => setWaiting(true);

  const retry = () => {
    startWaiting();
    compute();
  };

  if (waiting) {
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
