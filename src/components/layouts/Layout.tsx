import { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ModalWrapper from "../ModalWrapper";
import LayoutWrapper from "./LayoutWrapper";
import NavSidebar from "../sidebars/NavSidebar";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (<div className="bg-main">
      <LayoutWrapper>
        <Header />
        <NavSidebar />
        {children}
        <Footer />
      </LayoutWrapper>
    </div>
  );
};

export default Layout;
