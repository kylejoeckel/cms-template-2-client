import React, { Suspense, createContext, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Footer } from "../components/Footer";
import { FixedAppBar } from "../components/FixedAppBar";
import LoadingScreen from "../components/LoadingScreen";
import useSiteData from "../hooks/useSiteData";
import "../styles/App.css";
import MetaTags from "../components/MetaTags";

// Create a Context for site data
export const SiteDataContext = createContext(null);
const Home = lazy(() => import("../pages/Home"));
const PDFViewerWrapper = lazy(() => import("../pages/PDFView"));

function App() {
  const { siteData } = useSiteData();
  return (
    <Router>
      <SiteDataContext.Provider value={siteData}>
        <MetaTags />
        <Suspense fallback={<LoadingScreen />}>
          <div className="app">
            <CssBaseline />
            <FixedAppBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:fileName" element={<PDFViewerWrapper />} />
            </Routes>
            <Footer />
          </div>
        </Suspense>
      </SiteDataContext.Provider>
    </Router>
  );
}

export default App;
