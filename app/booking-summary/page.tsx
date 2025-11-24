'use client';

import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setBookingDetails } from '@/store/slices/bookingSlice';
import Link from 'next/link';
import styles from './BookingSummary.module.css';

export default function BookingSummary() {
  const booking = useAppSelector((state) => state.booking);
  const dispatch = useAppDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedBooking = localStorage.getItem('bookingData');
    if (savedBooking) {
      dispatch(setBookingDetails(JSON.parse(savedBooking)));
    }
    setLoaded(true);
  }, [dispatch]);

  if (!loaded) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Booking Summary</h1>
      <div className={styles.card}>
        <div className={styles.row}>
          <span className={styles.label}>Service Type:</span>
          <span className={styles.value}>{booking.serviceType}</span>
        </div>
        {(booking.serviceType === 'outstation' || booking.serviceType === 'local') && (
          <div className={styles.row}>
            <span className={styles.label}>Trip Type:</span>
            <span className={styles.value}>{booking.tripType}</span>
          </div>
        )}
        <div className={styles.row}>
          <span className={styles.label}>From:</span>
          <span className={styles.value}>{booking.from || '-'}</span>
        </div>
        {booking.serviceType !== 'local' && (
          <div className={styles.row}>
            <span className={styles.label}>
              {booking.serviceType === 'airport' ? 'Trip Details:' : 'To:'}
            </span>
            <span className={styles.value}>{booking.to || '-'}</span>
          </div>
        )}
        <div className={styles.row}>
          <span className={styles.label}>Pickup Date:</span>
          <span className={styles.value}>{booking.pickupDate || '-'}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Pickup Time:</span>
          <span className={styles.value}>{booking.pickupTime || '-'}</span>
        </div>
        {booking.tripType === 'roundtrip' && booking.serviceType === 'outstation' && (
          <div className={styles.row}>
            <span className={styles.label}>Return Date:</span>
            <span className={styles.value}>{booking.returnDate || '-'}</span>
          </div>
        )}
      </div>
      <Link href="/" className={styles.backButton}>
        Back to Home
      </Link>
    </div>
  );
}
