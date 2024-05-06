import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactModal } from './ContactModal';

describe('ContactModal', () => {
  test('renders ContactModal component', () => {
    render(<ContactModal open={true} setOpen={() => {}} />);
    const dialogTitle = screen.getByText(/How can we help?/i);
    expect(dialogTitle).toBeInTheDocument();
  });

  test('updates form values on input change', () => {
    render(<ContactModal open={true} setOpen={() => {}} />);
    const nameInput = screen.getByLabelText(/Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const messageInput = screen.getByLabelText(/Message/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, world!' } });

    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
    expect(messageInput.value).toBe('Hello, world!');
  });

  test('displays success snackbar on successful form submission', async () => {
    render(<ContactModal open={true} setOpen={() => {}} />);
    const nameInput = screen.getByLabelText(/Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const messageInput = screen.getByLabelText(/Message/i);
    const sendButton = screen.getByRole('button', { name: /Send/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, world!' } });

    fireEvent.click(sendButton);

    await waitFor(() => {
      const successSnackbar = screen.getByText(/Message sent successfully!/i);
      expect(successSnackbar).toBeInTheDocument();
    });
  });

  test('displays error snackbar on failed form submission', async () => {
    render(<ContactModal open={true} setOpen={() => {}} />);
    const nameInput = screen.getByLabelText(/Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const messageInput = screen.getByLabelText(/Message/i);
    const sendButton = screen.getByRole('button', { name: /Send/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, world!' } });

    // Mock a failed form submission by rejecting the fetch request
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Failed to send email.'));

    fireEvent.click(sendButton);

    await waitFor(() => {
      const errorSnackbar = screen.getByText(/Failed to send email./i);
      expect(errorSnackbar).toBeInTheDocument();
    });
  });
});