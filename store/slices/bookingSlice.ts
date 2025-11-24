import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingState {
  serviceType: 'outstation' | 'local' | 'airport';
  tripType: 'oneway' | 'roundtrip';
  trip: 'pickup' | 'drop';
  from: string;
  to: string;
  pickupDate: string;
  returnDate: string;
  pickupTime: string;
}

const initialState: BookingState = {
  serviceType: 'outstation',
  tripType: 'roundtrip',
  trip: 'pickup',
  from: '',
  to: '',
  pickupDate: '',
  returnDate: '',
  pickupTime: '00:00',
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setServiceType: (state, action: PayloadAction<'outstation' | 'local' | 'airport'>) => {
      state.serviceType = action.payload;
    },
    setTripType: (state, action: PayloadAction<'oneway' | 'roundtrip'>) => {
      state.tripType = action.payload;
    },
    setTrip: (state, action: PayloadAction<'pickup' | 'drop'>) => {
      state.trip = action.payload;
    },
    setFrom: (state, action: PayloadAction<string>) => {
      state.from = action.payload;
    },
    setTo: (state, action: PayloadAction<string>) => {
      state.to = action.payload;
    },
    setPickupDate: (state, action: PayloadAction<string>) => {
      state.pickupDate = action.payload;
    },
    setReturnDate: (state, action: PayloadAction<string>) => {
      state.returnDate = action.payload;
    },
    setPickupTime: (state, action: PayloadAction<string>) => {
      state.pickupTime = action.payload;
    },
    setBookingDetails: (state, action: PayloadAction<BookingState>) => {
      return action.payload;
    },
  },
});

export const {
  setServiceType,
  setTripType,
  setTrip,
  setFrom,
  setTo,
  setPickupDate,
  setReturnDate,
  setPickupTime,
  setBookingDetails,
} = bookingSlice.actions;

export default bookingSlice.reducer;

