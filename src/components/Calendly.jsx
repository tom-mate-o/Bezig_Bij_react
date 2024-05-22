import React from 'react';
import { InlineWidget } from 'react-calendly';

const Calendly = () => {
  return (
    <div className="App">
      <InlineWidget
        url="https://calendly.com/magicnonsense-agenda"
        styles={{
          height: '1000px',
          width: '100%',
        }}
      />
    </div>
  );
};

export default Calendly;
