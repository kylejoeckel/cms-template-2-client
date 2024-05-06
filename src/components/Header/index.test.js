import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

test("renders header component", () => {
  render(<Header />);

  //   // Assert that the header element is rendered
  //   const headerElement = screen.getByRole('banner');
  //   expect(headerElement).toBeInTheDocument();
});

// test('renders video element with correct attributes', () => {
//   render(<Header />);

//   // Assert that the video element is rendered
//   const videoElement = screen.getByRole('video');
//   expect(videoElement).toBeInTheDocument();

//   // Assert that the video element has the correct attributes
//   expect(videoElement).toHaveAttribute('poster', RestaurantInfo?.heroVideoPoster);
//   expect(videoElement).toHaveAttribute('autoPlay');
//   expect(videoElement).toHaveAttribute('loop');
//   expect(videoElement).toHaveAttribute('muted');
//   expect(videoElement).toHaveAttribute('playsInline');
//   expect(videoElement).toHaveAttribute('defaultMuted');
//   expect(videoElement).toHaveAttribute('width', '100vw');

//   // Assert that the video element has a source element with the correct attributes
//   const sourceElement = screen.getByRole('source');
//   expect(sourceElement).toBeInTheDocument();
//   expect(sourceElement).toHaveAttribute('src', RestaurantInfo?.heroVideo);
//   expect(sourceElement).toHaveAttribute('type', 'video/mp4');
// });
