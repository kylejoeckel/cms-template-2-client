import { renderHook } from "@testing-library/react-hooks";
import { useLazyLoadImage } from ".";

test("should set loaded to true when image is intersecting", () => {
  const imageUrl = "https://example.com/image.jpg";
  const { result } = renderHook(() => useLazyLoadImage(imageUrl));

  // Simulate image intersection
  result.current[1]({
    isIntersecting: true,
    target: { dataset: { bg: imageUrl } },
  });

  expect(result.current[0]).toBe(true);
});

test("should not set loaded to true when image is not intersecting", () => {
  const imageUrl = "https://example.com/image.jpg";
  const { result } = renderHook(() => useLazyLoadImage(imageUrl));

  // Simulate image not intersecting
  result.current[1]({
    isIntersecting: false,
    target: { dataset: { bg: imageUrl } },
  });

  expect(result.current[0]).toBe(false);
});

test("should not set loaded to true when image element is not found", () => {
  const imageUrl = "https://example.com/image.jpg";
  const { result } = renderHook(() => useLazyLoadImage(imageUrl));

  // Simulate image element not found
  result.current[1]({
    isIntersecting: true,
    target: { dataset: { bg: "https://example.com/other-image.jpg" } },
  });

  expect(result.current[0]).toBe(false);
});
