import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

interface IProps {
  start: number;
  end: number;
  duration?: number;
}

const NumberCountUp: React.FC<IProps> = ({ start, end, duration = 5 }) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <VisibilitySensor onChange={(visible) => setVisible(visible)}>
      {isVisible ? <CountUp start={start} end={end} duration={duration} /> : <span>...</span>}
    </VisibilitySensor>
  );
};

export default NumberCountUp;
