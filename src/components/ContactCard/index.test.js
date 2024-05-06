import React from 'react';
import {  screen, fireEvent, render } from '@testing-library/react';
import { ContactCard } from './ContactCard';

test('renders contact card with correct content', () => {
  render(<ContactCard mobile={false} />)
  
  // Assert that the RestaurantInfo logo is rendered
  const logoElement = screen.getByAltText('RestaurantInfo Logo');
  expect(logoElement).toBeInTheDocument();

  // Assert that the contact information is rendered
  const hoursElement = screen.getByText(/Tuesday - Sunday. 11am - 9:30pm/i);
  expect(hoursElement).toBeInTheDocument();

  const phoneElement = screen.getByText("(720) 484-6567");
  expect(phoneElement).toBeInTheDocument();

  // Assert that the "Reservations" button is rendered
  const reservationsButton = screen.getByRole('link', { name: /reservations/i });
  expect(reservationsButton).toBeInTheDocument();

  // Assert that the "Message Us" button is rendered
  const messageButton = screen.getByRole('button', { name: /message us/i });
  expect(messageButton).toBeInTheDocument();
});

test('opens contact modal when "Message Us" button is clicked', () => {
  render(<ContactCard mobile={false} />);
  
  // Click the "Message Us" button
  const messageButton = screen.getByRole('button', { name: /message us/i });
  fireEvent.click(messageButton);

  // Assert that the contact modal is open
  const contactModal = screen.getByRole('dialog');
  expect(contactModal).toBeInTheDocument();
});