"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setServiceType,
  setTripType,
  setTrip,
  setFrom,
  setTo,
  setPickupDate,
  setReturnDate,
  setPickupTime,
  setBookingDetails,
} from "@/store/slices/bookingSlice";
import CitySearchInput from "@/components/ui/CitySearchInput";
import styles from "./Hero.module.css";

const Hero = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const booking = useAppSelector((state) => state.booking);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedBooking = localStorage.getItem("bookingData");
    if (savedBooking) {
      dispatch(setBookingDetails(JSON.parse(savedBooking)));
    }
  }, [dispatch]);

  const handleTabChange = (tab: "outstation" | "local" | "airport") => {
    dispatch(setServiceType(tab));
  };

  const handleTripTypeChange = (type: "oneway" | "roundtrip") => {
    dispatch(setTripType(type));
  };

  const handleAirportTripChange = (trip: "pickup" | "drop") => {
    dispatch(setTrip(trip));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!booking.from || !booking.pickupDate || !booking.pickupTime) {
      alert("Please fill in all required fields");
      return;
    }

    if (booking.serviceType === "outstation" && !booking.to) {
      alert("Please fill in the destination");
      return;
    }

    // Date and Time Validation
    const today = new Date();
    const pickupDate = new Date(booking.pickupDate);
    const isToday =
      pickupDate.getDate() === today.getDate() &&
      pickupDate.getMonth() === today.getMonth() &&
      pickupDate.getFullYear() === today.getFullYear();

    if (isToday) {
      const [hours, minutes] = booking.pickupTime.split(":").map(Number);
      const pickupTime = new Date();
      pickupTime.setHours(hours, minutes, 0, 0);

      if (pickupTime < today) {
        alert("Pickup time cannot be in the past");
        return;
      }
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Save to localStorage
    localStorage.setItem("bookingData", JSON.stringify(booking));

    setIsSubmitting(false);
    
    // Redirect to summary page
    router.push("/booking-summary");
  };

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.headline}>
          India&apos;s <span className={styles.highlight}>Leading</span>
          <br />
          <span className={styles.highlight}>One Way Intercity</span>
          <br />
          Cab Service Provider
        </h1>
      </div>

      <div className={styles.bookingWidget}>
        {/* Tabs */}
        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${
              booking.serviceType === "outstation" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabChange("outstation")}
          >
            Outstation
          </div>
          <div
            className={`${styles.tab} ${
              booking.serviceType === "local" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabChange("local")}
          >
            Local
          </div>
          <div
            className={`${styles.tab} ${
              booking.serviceType === "airport" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabChange("airport")}
          >
            Airport
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Trip Type Options */}
          <div className={styles.tripTypeContainer}>
            {booking.serviceType === "outstation" && (
              <div className={styles.tripType}>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="tripType"
                    checked={booking.tripType === "oneway"}
                    onChange={() => handleTripTypeChange("oneway")}
                    className={styles.radioInput}
                  />
                  One Way
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="tripType"
                    checked={booking.tripType === "roundtrip"}
                    onChange={() => handleTripTypeChange("roundtrip")}
                    className={styles.radioInput}
                  />
                  Round Trip
                </label>
              </div>
            )}

             {booking.serviceType === "local" && (
              <div className={styles.tripType}>
                 <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="tripTypeLocal"
                    checked={booking.tripType === "oneway"}
                     onChange={() => handleTripTypeChange("oneway")}
                    className={styles.radioInput}
                  />
                  One Way
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="tripTypeLocal"
                    checked={booking.tripType === "roundtrip"}
                     onChange={() => handleTripTypeChange("roundtrip")}
                    className={styles.radioInput}
                  />
                  Round Trip
                </label>
              </div>
            )}

            {booking.serviceType === "airport" && (
               <div className={styles.tripType}>
                 {/* Airport doesn't show One Way/Round Trip in the same way */}
               </div>
            )}
          </div>

          <div className={styles.inputGrid}>
            {/* Row 1, Col 1: FROM (Always) */}
            <div className={styles.inputField}>
              <label className={styles.label}>FROM</label>
              <CitySearchInput
                value={booking.from}
                onChange={(val) => dispatch(setFrom(val))}
                placeholder="Enter City"
                className={styles.input}
              />
            </div>

            {/* Row 1, Col 2: TO or TRIP */}
            <div className={styles.inputField}>
              {booking.serviceType === "airport" ? (
                 <>
                  <label className={styles.label}>TRIP</label>
                   <CitySearchInput
                    value={booking.to}
                    onChange={(val) => dispatch(setTo(val))}
                    placeholder="Enter Destination"
                    className={styles.input}
                  />
                 </>
              ) : (
                <>
                  <label className={styles.label}>TO</label>
                  <CitySearchInput
                    value={booking.to}
                    onChange={(val) => dispatch(setTo(val))}
                    placeholder="Enter City"
                    className={styles.input}
                  />
                </>
              )}
            </div>

            {/* Row 2, Col 1: PICKUP DATE (Always) */}
            <div className={styles.inputField}>
              <label className={styles.label}>PICKUP DATE</label>
              <input
                type="date"
                value={booking.pickupDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => dispatch(setPickupDate(e.target.value))}
                className={styles.input}
              />
            </div>

            {/* Row 2, Col 2: RETURN DATE (Outstation) or PICKUP TIME (Local/Airport) */}
            <div className={styles.inputField}>
              {booking.serviceType === "outstation" ? (
                 <>
                  <label className={styles.label}>RETURN DATE</label>
                  <input
                    type="date"
                    value={booking.returnDate}
                    min={booking.pickupDate || new Date().toISOString().split("T")[0]}
                    onChange={(e) => dispatch(setReturnDate(e.target.value))}
                    className={styles.input}
                    disabled={booking.tripType === "oneway"}
                  />
                 </>
              ) : (
                 <>
                    <label className={styles.label}>PICKUP TIME</label>
                    <input
                      type="time"
                      value={booking.pickupTime}
                      onChange={(e) => dispatch(setPickupTime(e.target.value))}
                      className={styles.input}
                    />
                 </>
              )}
            </div>
            
            {/* Row 3, Col 1: PICKUP TIME (Only for Outstation) */}
            {booking.serviceType === "outstation" && (
               <div className={styles.inputField}>
                <label className={styles.label}>PICKUP TIME</label>
                <input
                  type="time"
                  value={booking.pickupTime}
                  onChange={(e) => dispatch(setPickupTime(e.target.value))}
                  className={styles.input}
                />
              </div>
            )}
             {/* Empty div for alignment if needed for Outstation Row 3 Col 2 */}
             {booking.serviceType === "outstation" && <div className={styles.inputField}></div>}

          </div>

          <div className={styles.buttonGroup}>
            <button
              type="submit"
              className={styles.exploreButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "PROCESSING..." : "EXPLORE CABS"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
