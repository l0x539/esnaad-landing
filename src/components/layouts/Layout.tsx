import { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ModalWrapper from "../ModalWrapper";
import LayoutWrapper from "./LayoutWrapper";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
