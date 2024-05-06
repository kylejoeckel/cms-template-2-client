import React, { useContext, useRef } from "react";
import { useTheme } from "@mui/material";
import { ContactCard } from "../ContactCard";
import ContentBlockItem from "../ContentBlockItem";
import { SiteDataContext } from "../../app";
import { useLazyLoadImage } from "../../hooks/useLazyLoadImage";
import { useMobileView } from "../../hooks/useMobileView";

const ContentBlock = () => {
  const data = useContext(SiteDataContext);
  const mobile = useMobileView("md");
  const ASSET_URL = `${data?.assetUrl}${data?.groupName}`;
  const theme = useTheme();
  const contentRefs = useRef({});

  const registerRef = (url, el) => {
    if (el && !contentRefs.current[url]) {
      contentRefs.current[url] = el;
    }
  };

  const imageUrl = `${ASSET_URL}${data?.heroImg}`;
  const { placeholderImage, imageLoaded } = useLazyLoadImage(imageUrl);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: mobile ? "column" : "row",
          width: "100%",
        }}
      >
        <div style={{ width: mobile ? "100%" : "calc(40%)" }}>
          <ContactCard />
        </div>
        <div
          ref={(el) => registerRef(imageUrl, el)}
          data-bg={imageUrl}
          style={{
            minHeight: "200px",
            width: mobile ? "100%" : "calc(60%)",
            backgroundImage: `url(${
              imageLoaded ? imageUrl : placeholderImage
            })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      {mobile && <hr />}
      {data?.content?.map((content, i) => (
        <ContentBlockItem
          content={content}
          key={i}
          index={i}
          theme={theme}
          registerRef={registerRef}
        />
      ))}
    </>
  );
};

export default ContentBlock;
