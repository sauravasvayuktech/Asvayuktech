import { lazy, Suspense, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
// import AutoPopupModal from "./Components/AutoPopupModal/AutoPopupModal";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { LanguageProvider } from "./LanguageContext";

function App() {
  const AutoPopupModal = lazy(() =>
    import("./Components/AutoPopupModal/AutoPopupModal")
  );
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <LanguageProvider>
        <ScrollToTop />
        <Header />
        <Suspense fallback={null}>
          <AutoPopupModal />
        </Suspense>
        <Outlet />
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
