'use client';

import React from 'react';

const PricingTable: React.FC = () => {
  const pricingData = [
    {
      carType: 'AC Sedans',
      models: 'Etios, Amaze, Dzire etc.',
      passengers: '4 Pax',
      idealFor: 'Comfortable trips with small families',
      fare: 'Rs.11/KM',
    },
    {
      carType: 'AC Hatchbacks',
      models: 'Wagon R, Celerio, Micra etc.',
      passengers: '4 Pax',
      idealFor: 'Budget trips over short distances',
      fare: 'Rs.11/KM',
    },
    {
      carType: 'AC SUV',
      models: 'Ertiga, Xylo etc.',
      passengers: '6-7 Pax',
      idealFor: 'Premium trips with large families',
      fare: 'Rs.13/KM',
    },
  ];

  return (
    <section className="pricing-table">
      <h2>PRICING</h2>
      <div className="table-container">
        <table className="pricing-table-content">
          <thead>
            <tr>
              <th>CAR TYPE</th>
              <th>MODEL INCLUDES</th>
              <th>PASSENGERS</th>
              <th>IDEAL FOR</th>
              <th>FARE</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((item, index) => (
              <tr key={index}>
                <td>{item.carType}</td>
                <td>{item.models}</td>
                <td>{item.passengers}</td>
                <td>{item.idealFor}</td>
                <td className="fare-cell">{item.fare}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PricingTable;

