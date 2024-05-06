import { render, screen } from "@testing-library/react";
import ContentBlockItem from "./ContentBlockItem";

test("renders ContentBlockItem component with loaded image", () => {
  const mockContent = {
    contentImg: "https://example.com/image.jpg",
    title: "Title 1",
    content: "Lorem ipsum dolor sit amet",
  };
  render(
    <ContentBlockItem
      content={mockContent}
      index={0}
      mobile={false}
      theme={{}}
      registerRef={() => {}}
    />
  );

  // Assert that the image is rendered with the correct URL
  const imageElement = screen.getByTestId("content-image");
  expect(imageElement).toHaveStyle(
    `backgroundImage: url(${mockContent.contentImg})`
  );

  // Assert that the title is rendered
  const titleElement = screen.getByText(mockContent.title);
  expect(titleElement).toBeInTheDocument();

  // Assert that the content is rendered
  const contentElement = screen.getByText(mockContent.content);
  expect(contentElement).toBeInTheDocument();
});

test("renders ContentBlockItem component with placeholder image", () => {
  const mockContent = {
    contentImg: "",
    title: "Title 2",
    content: "Lorem ipsum dolor sit amet",
  };
  render(
    <ContentBlockItem
      content={mockContent}
      index={1}
      mobile={true}
      theme={{}}
      registerRef={() => {}}
    />
  );

  // Assert that the placeholder image is rendered
  const imageElement = screen.getByTestId("content-image");
  expect(imageElement).toHaveStyle(
    `backgroundImage: url(/plate_of_food_silhouette.jpg)`
  );

  // Assert that the title is rendered
  const titleElement = screen.getByText(mockContent.title);
  expect(titleElement).toBeInTheDocument();

  // Assert that the content is rendered
  const contentElement = screen.getByText(mockContent.content);
  expect(contentElement).toBeInTheDocument();
});
