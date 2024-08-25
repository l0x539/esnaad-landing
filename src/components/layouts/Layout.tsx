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
        <div className="hidden lg:block">
          {children}
        </div>
        <div className="flex w-screen h-screen justify-center items-center text-5xl lg:hidden">
          Mobile View under construction
        </div>
        <Footer />
      </LayoutWrapper>
    </div>
  );
};

export default Layout;
