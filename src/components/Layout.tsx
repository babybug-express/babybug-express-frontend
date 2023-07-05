import { FunctionComponent, ReactElement, ReactNode } from "react";
import Footer from "./Footer";
import MainHeader from "./MainHeader";

interface LayoutProps {
  children?: ReactNode;
  MainHeader: React.FunctionComponent;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }): ReactElement => {
  return (
    <div>
      <MainHeader />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
