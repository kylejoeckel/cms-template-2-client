import GoogleMaps from "../GoogleMap";
import { Container } from "@mui/material";
import ContentBlock from "../ContentBlock";
import { useMobileView } from "../../hooks/useMobileView";

const MainContainer = () => {
  const mobile = useMobileView("md");

  return (
    <main
      className="main-content"
      style={{
        border: mobile ? "none" : "solid 2px rgba(0,0,0,0.6)",
        borderBottom: "none",
        padding: mobile ? 0 : "34px 34px 0px",
      }}
    >
      <Container elevation={0}>
        <ContentBlock />
        <GoogleMaps />
      </Container>
    </main>
  );
};
export default MainContainer;
