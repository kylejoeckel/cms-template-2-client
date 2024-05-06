import { useState, useEffect } from "react";
import { placeholderImage } from "./placholderImage";

export const useLazyLoadImage = (imageUrl) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoaded(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01 }
    );

    const imgElement = document.querySelector(`[data-bg="${imageUrl}"]`);
    if (imgElement) {
      observer.observe(imgElement);
    }

    return () => {
      if (imgElement) {
        observer.unobserve(imgElement);
      }
    };
  }, [imageUrl]);

  return { placeholderImage, imageLoaded: loaded };
};
