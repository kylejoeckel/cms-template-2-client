import { render, screen } from "@testing-library/react";
import ContentBlock from "./ContentBlock";

test("renders ContactCard component", () => {
  render(<ContentBlock mobile />);
  const contactCardElement = screen.getByTestId("contact-card");
  expect(contactCardElement).toBeInTheDocument();
});

test("renders ContentBlockItem components", () => {
  const mockContent = [
    { title: "Title 1", description: "Description 1" },
    { title: "Title 2", description: "Description 2" },
  ];
  render(<ContentBlock mobile content={mockContent} />);
  const ContentBlockItems = screen.getAllByTestId("content-block-item");
  expect(ContentBlockItems.length).toBe(mockContent.length);
});
