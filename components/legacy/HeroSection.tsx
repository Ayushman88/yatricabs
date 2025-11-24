'use client';

import React from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setServiceType,
  setTripType,
  setFrom,
  setTo,
  setPickupDate,
  setReturnDate,
  setPickupTime,
} from '@/store/slices/bookingSlice';

const HeroSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const booking = useAppSelector((state) => state.booking);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-headline">
          INDIA&apos;S LEADING <span>ONE WAY</span> INTERCITY CAB SERVICE PROVIDER.
        </div>
        <div className="booking-form-container">
          <div className="service-tabs">
            <button
              className={`service-tab ${booking.serviceType === 'outstation' ? 'active' : ''}`}
              onClick={() => dispatch(setServiceType('outstation'))}
            >
              Outstation
            </button>
            <button
              className={`service-tab ${booking.serviceType === 'local' ? 'active' : ''}`}
              onClick={() => dispatch(setServiceType('local'))}
            >
              Local
            </button>
            <button
              className={`service-tab ${booking.serviceType === 'airport' ? 'active' : ''}`}
              onClick={() => dispatch(setServiceType('airport'))}
            >
              Airport
            </button>
          </div>

          <div className="trip-type">
            <div className="trip-option">
              <input
                type="radio"
                id="oneway"
                name="tripType"
                checked={booking.tripType === 'oneway'}
                onChange={() => dispatch(setTripType('oneway'))}
              />
              <label htmlFor="oneway">One Way</label>
            </div>
            <div className="trip-option">
              <input
                type="radio"
                id="roundtrip"
                name="tripType"
                checked={booking.tripType === 'roundtrip'}
                onChange={() => dispatch(setTripType('roundtrip'))}
              />
              <label htmlFor="roundtrip">Round Trip</label>
            </div>
          </div>

          <div className="form-group">
            <label>FROM</label>
            <input
              type="text"
              placeholder="Enter pickup location"
              value={booking.from}
              onChange={(e) => dispatch(setFrom(e.target.value))}
            />
          </div>

          <div className="form-group">
            <label>TO</label>
            <div className="input-with-icon">
              <input
                type="text"
                placeholder="Enter destination"
                value={booking.to}
                onChange={(e) => dispatch(setTo(e.target.value))}
              />
              <span className="input-icon">📍</span>
            </div>
          </div>

          <div className="form-group">
            <label>Pickup Date</label>
            <div className="input-with-icon">
              <input
                type="date"
                value={booking.pickupDate}
                onChange={(e) => dispatch(setPickupDate(e.target.value))}
              />
              <span className="input-icon">📅</span>
            </div>
          </div>

          {booking.tripType === 'roundtrip' && (
            <div className="form-group">
              <label>Return Date</label>
              <div className="input-with-icon">
                <input
                  type="date"
                  value={booking.returnDate}
                  onChange={(e) => dispatch(setReturnDate(e.target.value))}
                />
                <span className="input-icon">📅</span>
              </div>
            </div>
          )}

          <div className="form-group">
            <label>Pickup Time</label>
            <div className="input-with-icon">
              <input
                type="time"
                value={booking.pickupTime}
                onChange={(e) => dispatch(setPickupTime(e.target.value))}
              />
              <span className="input-icon">🕐</span>
            </div>
          </div>

          <button className="explore-button">EXPLORE CABS</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

