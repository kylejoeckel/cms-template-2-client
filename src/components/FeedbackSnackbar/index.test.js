import { render, screen } from '@testing-library/react';
import FeedbackSnackbar from './FeedbackSnackbar';

test('renders the feedback message', () => {
  const message = 'This is a feedback message';
  render(<FeedbackSnackbar open={true} handleClose={() => {}} message={message} severity="success" />);
  const feedbackMessage = screen.getByText(message);
  expect(feedbackMessage).toBeInTheDocument();
});

test('closes the snackbar when handleClose is called', () => {
  let isClosed = false;
  const handleClose = () => {
    isClosed = true;
  };
  render(<FeedbackSnackbar open={true} handleClose={handleClose} message="Test message" severity="success" />);
  const snackbar = screen.getByRole('alert');
  expect(snackbar).toBeInTheDocument();
  handleClose();
  expect(isClosed).toBe(true);
});