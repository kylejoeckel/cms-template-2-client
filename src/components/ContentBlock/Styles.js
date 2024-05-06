// Styles.js
import { styled } from "@mui/system";

export const ContentContainer = styled("div")(({ theme, mobile }) => ({
  display: "flex",
  flexDirection: mobile ? "column" : "row",
  width: "100%",
}));

export const ContactCardContainer = styled("div")(({ theme, mobile }) => ({
  width: mobile ? "100%" : "calc(40%)",
}));

export const ImageContainer = styled("div")(({ theme, mobile, imageUrl }) => ({
  minHeight: "200px",
  width: mobile ? "100%" : "calc(60%)",
  backgroundImage: `url(${imageUrl})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
}));
