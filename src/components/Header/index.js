import { VideoPlayer } from "../VideoPlayer";
import "../../styles/index.css";
import { useMobileView } from "../../hooks/useMobileView";

export const Header = () => {
  const mobile = useMobileView("md");
  return (
    <header className="header" style={{ height: mobile ? "175px" : "700px" }}>
      <VideoPlayer />
    </header>
  );
};
