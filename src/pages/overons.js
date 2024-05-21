import React from 'react';
import { useEffect } from 'react';

export default function OverOns() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <div className="singlepage__dividerHeadline">
          <h2>Over Ons</h2>
        </div>
        <p>coming soon</p>
      </div>
    </div>
  );
}
