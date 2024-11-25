import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import BookingForm from './components/BookingForm';
import {initializeTimes, updateTimes} from './pages/Reservation';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });



it('should render the BookingForm heading', () => {
    render(<BookingForm />);
    expect(screen.getByText("Book A Table")).toBeInTheDocument();
});

it('should allow the user to submit the booking form', () => {
  const handleSubmitMock = jest.fn(); // Mock the handleSubmit function

  render(
      <BookingForm
          availableTimes={['10:00 AM', '11:00 AM', '12:00 PM']}
          handleSubmit={handleSubmitMock} // Pass the mock function as prop
      />
  );

  fireEvent.change(screen.getByLabelText(/Choose Date/i), {
      target: { value: '2024-12-01' },
  });
  fireEvent.change(screen.getByLabelText(/Choose Time/i), {
      target: { value: '10:00 AM' },
  });
  fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: '3' },
  });
  fireEvent.change(screen.getByLabelText(/Occasion/i), {
      target: { value: 'Birthday' },
  });

  // Simulate form submission
  fireEvent.submit(screen.getByRole('form'));

  // Assert that the handleSubmitMock was called once
  expect(handleSubmitMock).toHaveBeenCalled();
});

describe('initializeTimes', () => {
  it('should return an array of initial times', () => {
      const initialTimes = initializeTimes();
      expect(initialTimes).toEqual(['10:00 AM', '11:00 AM', '12:00 PM']);
  });

});

describe('updateTimes', () => {
  it('should update times when action type is UPDATE_TIMES', () => {
      const initialState = ['10:00 AM', '11:00 AM', '12:00 PM'];
      const action = { type: 'UPDATE_TIMES', payload: '2024-11-22' };
      const updatedState = updateTimes(initialState, action);

      expect(updatedState).toEqual(['1:00 PM', '2:00 PM', '3:00 PM']);
  });

  it('should return the current state if action type is not recognized', () => {
      const initialState = ['10:00 AM', '11:00 AM', '12:00 PM'];
      const action = { type: 'UNKNOWN_ACTION' };
      const updatedState = updateTimes(initialState, action);

      expect(updatedState).toEqual(initialState);
  });
});
