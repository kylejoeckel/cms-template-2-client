// src/hooks/useFadeInOnScroll/index.js
import { useState, useEffect, useRef } from "react";

const useFadeInOnScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Copy ref.current to a variable to use in the cleanup function
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // You can adjust this value as needed
      }
    );

    if (element) {
      observer.observe(element);
    }

    // Cleanup function to unobserve the element
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
    // Since element is a const defined inside useEffect, it's guaranteed to have the same value and doesn't need to be a dependency
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return [ref, isVisible]; // Return both the ref and the visibility state
};

export default useFadeInOnScroll;
