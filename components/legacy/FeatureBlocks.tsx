'use client';

import React from 'react';

const FeatureBlocks: React.FC = () => {
  return (
    <section className="feature-blocks">
      <div className="feature-block">
        <div className="feature-icon">💰</div>
        <h3>RETURN FARE, NOT FAIR!</h3>
        <p>
          Get discounted AC taxi at half the round trip cost for one-way travel.
          Save money while enjoying comfortable rides across cities.
        </p>
      </div>
      <div className="feature-block">
        <div className="feature-icon">📍</div>
        <h3>GPS BASED BILLING SYSTEM</h3>
        <p>
          Our GPS-based billing ensures accurate distance and time calculation,
          eliminating any tampering or discrepancies in fare calculation.
        </p>
      </div>
      <div className="feature-block">
        <div className="feature-icon">🚗</div>
        <h3>NOW AVAILABLE ROUTES ARE!</h3>
        <p>
          Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Bareilly
        </p>
      </div>
    </section>
  );
};

export default FeatureBlocks;

