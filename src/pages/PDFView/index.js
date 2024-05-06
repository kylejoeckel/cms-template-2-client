import { useParams } from "react-router-dom";
import PDFViewer from "../../components/PDFViewer";
import { useContext } from "react";
import { SiteDataContext } from "../../app";

// Wrapper component to handle fetching the PDF file based on the route parameter
const PDFViewerWrapper = () => {
  const data = useContext(SiteDataContext);
  const ASSET_URL = `${data?.assetUrl}${data?.groupName}`;
  let { fileName } = useParams();
  const fileUrl = `${ASSET_URL}/${fileName}.pdf`;
  return <PDFViewer file={fileUrl} />;
};

export default PDFViewerWrapper;
