'use client';

import React from 'react';

const FeatureBar: React.FC = () => {
  return (
    <section className="feature-bar">
      <div className="feature-item">
        <h3>Transparent Billing</h3>
        <p>GPS Based Billing | No Km Tampering.</p>
      </div>
      <div className="feature-item">
        <h3>Download Now!</h3>
        <div className="download-buttons">
          <div className="download-button">
            <span>GET IT ON</span>
            <span>Google Play</span>
          </div>
          <div className="download-button">
            <span>Download on the</span>
            <span>App Store</span>
          </div>
        </div>
      </div>
      <div className="feature-item">
        <h3>No return fare</h3>
        <p>Oneway Cab Fare | No Hidden Charges.</p>
      </div>
    </section>
  );
};

export default FeatureBar;

