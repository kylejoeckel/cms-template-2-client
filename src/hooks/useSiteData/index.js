import { useEffect, useState } from "react";

const useSiteData = () => {
  const [siteData, setSiteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSiteData = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_SITE_DATA_URL +
            `/${process.env.REACT_APP_SITE_DATA_ID}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setSiteData(data.siteData);
        } else {
          throw new Error("Failed to fetch site data");
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSiteData();
  }, []);
  return { siteData, loading, error };
};

export default useSiteData;
