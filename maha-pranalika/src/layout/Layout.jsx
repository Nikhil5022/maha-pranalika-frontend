import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LanguageProvider } from "../components/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";

import { useLocation } from "react-router-dom";
import { AuthProvider } from "../components/AuthContext";
const Layout = ({ children }) => {
  const location = useLocation();
  const isRootPath = location.pathname === "/signup" || location.pathname === "/login";

  return (
    <LanguageProvider>
      <AuthProvider>
        {isRootPath ? (
          <main>{children}</main>
        ) : (
          <>
            <LanguageSwitcher />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </>
        )}
      </AuthProvider>
    </LanguageProvider>
  );
};

export default Layout;
