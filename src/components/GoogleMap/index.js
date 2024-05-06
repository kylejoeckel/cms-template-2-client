import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "../../styles/App.css";
import { useSnackbar } from "../../hooks/useSnackbar";
import { useContext } from "react";
import { SiteDataContext } from "../../app";

const GOOGLE_MAPS_API_KEY = "AIzaSyCWJ6Xj4OVvTmKuUrOM3AbPX-KEO0J-Y5Y";
const GOOGLE_MAP_ID = "a552e243fbe9d8ae";

const GoogleMaps = () => {
  const data = useContext(SiteDataContext);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    id: GOOGLE_MAP_ID,
  });
  const { enqueueSnackbar, renderSnackbar } = useSnackbar();

  if (loadError) {
    enqueueSnackbar(
      "Failed to load Google Maps. Please try again later.",
      "error"
    );
  }

  return (
    data?.longitude && (
      <>
        <div style={{ width: "100%", height: "500px" }}>
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <GoogleMap
              loading="async"
              mapContainerClassName="map-container"
              center={{
                lat: Number(data?.latitude),
                lng: Number(data?.longitude),
              }}
              zoom={20}
              options={{ mapId: GOOGLE_MAP_ID }}
            ></GoogleMap>
          )}
        </div>
        {renderSnackbar()}
      </>
    )
  );
};

export default GoogleMaps;
