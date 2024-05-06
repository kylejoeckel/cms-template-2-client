import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { SiteDataContext } from "../../app";

const MetaTags = () => {
  const data = useContext(SiteDataContext);
  const ASSET_URL = `${data?.assetUrl}${data?.groupName}`;
  let metaData;
  if (data) metaData = data.metaData;
  return (
    metaData && (
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="author" content="Kyle Joeckel" />
        <link rel="icon" href={ASSET_URL + metaData?.favicon} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={metaData?.appleMobileWebStatusBarStyle}
        />
        <meta
          name="apple-mobile-web-app-title"
          content={metaData?.appleMobileWebAppTitle}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={metaData?.themeColor} />
        <meta name="description" content={metaData?.description} />
        <meta name="keywords" content={metaData?.keywords} />
        <meta property="og:title" content={metaData?.ogTitle} />
        <meta property="og:description" content={metaData?.ogDescription} />
        <meta property="og:image" content={ASSET_URL + metaData?.ogImage} />
        <meta property="og:url" content={metaData?.og} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={metaData?.ogSiteName} />
        <link rel="manifest" href={ASSET_URL + metaData?.manifest} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={ASSET_URL + metaData?.appleTouchIcon}
        />
        <title>{metaData?.title}</title>
      </Helmet>
    )
  );
};
export default MetaTags;
