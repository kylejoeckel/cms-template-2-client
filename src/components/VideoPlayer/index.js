import { useLocation } from "react-router-dom";
import { SiteDataContext } from "../../app";
import { useContext } from "react";
import { useMobileView } from "../../hooks/useMobileView";

export const VideoPlayer = () => {
  const data = useContext(SiteDataContext);
  const mobile = useMobileView("md");

  const location = useLocation();
  const isHome = location.pathname === "/";
  return mobile ? (
    <img
      alt="Cover"
      src={`${data?.assetUrl}${data?.groupName}${data?.heroVideoPoster}`}
      style={{ width: "100vw", height: "auto" }}
    />
  ) : (
    <div
      className="video-container"
      style={{
        borderBottom: isHome ? "solid 34px white" : "none",
        height: !isHome ? "200px" : "700px",
      }}
    >
      <video
        className="videoTag"
        poster={`${data?.assetUrl}${data?.groupName}${data?.heroVideoPoster}`}
        autoPlay
        loop
        muted
        playsInline
        defaultMuted
        width={"100vw"}
      >
        <source
          style={{ width: "100%" }}
          src={`${data?.assetUrl}${data?.groupName}${data?.heroVideo}`}
          type="video/mp4"
        />
      </video>
    </div>
  );
};
